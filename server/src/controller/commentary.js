const Commentary = require('./../models/commentary')
const Post = require('./../models/post')
const User = require('./../models/user')

const createCommentary = async (postId, commentary, userId) => {
    const user = await User.findOne({_id: userId})
    if(!user) throw new Error('Usuario no encontrado')

    const post = await Post.findOne({_id: postId})
    if(!post) throw new Error('Post no encontrado')

    try {
        const newCommentary = Commentary({
            commentary,
            idPost: postId,
            idUser: userId
        })
        await newCommentary.save();
        return true
    } catch (error) {
        throw new Error(error.message)
    }
}

const getCommentaries = async (postId) => {
    const commentaryList = await Commentary.find({idPost: postId}).populate('idUser')
    if(!commentaryList) throw new Error('Post no encontrado')

    return commentaryList
}

module.exports = { createCommentary, getCommentaries }