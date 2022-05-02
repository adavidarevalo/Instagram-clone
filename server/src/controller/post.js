const Post = require('../models/post')
const _ = require('lodash');
const User = require('../models/user')
const {uploadImage} =  require('./../utils/avatar')

const updatePost = async (file, description, _id) => {
    const user = await User.findOne({ _id })
    if (!user) throw new Error('Usuario no existe');

    const updateImage = await uploadImage(file, 'post')

    try {
        const newPublish = Post({
            file: updateImage,
            description: description,
            typeFile: updateImage.split('.').pop(),
            idUser: _id
        })
        await newPublish.save();

    } catch (error) {
        throw new Error(error.message)
    }
    return updateImage 
}

const getPost =  async (userName) => {
    const [userData] = await User.find({userName})
    if(!userData) throw new Error('Usuario no encontrado')
    const posts = await Post.find({idUser: userData._id}).sort({ createAt: -1})

    return posts
}

module.exports = { updatePost, getPost }