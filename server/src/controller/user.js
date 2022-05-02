const User = require('../models/user')
const hash = require('../utils/hashPassword')
const token = require('../utils/token')
const _ = require('lodash');
const {uploadImage, deleteAvatarFn} =  require('./../utils/avatar')


const createUserController = async (props) => {
    let cloneProps = _.cloneDeep(props)

    let { userName, password, email } = cloneProps;

    const emailIsValid = await User.findOne({ email })
    if (emailIsValid) throw new Error('Email ya esta en uso');

    const userNameIsValid = await User.findOne({ userName })
    if (userNameIsValid) throw new Error('El nombre de usario ya esta en uso');

    cloneProps.password = await hash.generateHash(password)

    try {
        const newUser = User(cloneProps)
        const result = await newUser.save();

        const newToken = await token.createToken(result)
        return { token: newToken }
    } catch (error) {
        throw new Error(error)
    }
}

const loginUser = async (email, password) => {
    const validateUser = await User.findOne({ email })

    if (!validateUser) throw new Error('Credenciales no validas');

    const validatePass = await hash.validatePassword(password, validateUser.password)
    if (!validatePass) throw new Error('Credenciales no validas');

    const newToken = await token.createToken(validateUser)

    return { token: newToken }
}

const getUser = async (userName) => {
    const user = await User.findOne({ userName })
    if (!user) throw new Error('Usuario no existe');

    const cloneUser = _.cloneDeep(user._doc)
    delete cloneUser.password
    delete cloneUser.createAt

    return [cloneUser]
}

const getSearch = async (search) => {
    const users = await User.find({
        name: { $regex: search, $options: "i" }
    }).limit(12)

    return users
}

const getAvatar = async ({ userName }) => {
    const user = await User.find({userName})

    return user.avatar
}

const updateAvatar = async (file,  _id) => {
    const user = await User.findOne({ _id })
    if (!user) throw new Error('Usuario no existe');

    const updateImage = await uploadImage(file, 'avatar')

    await User.findByIdAndUpdate({ _id }, {$set:{avatar: updateImage}})

    return updateImage 
}

const deleteAvatar = async (_id) => {
    const user = await User.findOne({ _id })
    if (!user) throw new Error('Usuario no existe');
    await deleteAvatarFn(user.avatar)
    await User.findByIdAndUpdate({ _id }, {$set:{avatar: null}})

    return ''
}

const getUserSuggestions = async (id) => {
    const user = await User.findOne({ id })
    if (!user) throw new Error('Usuario no existe');

    const userSuggestions = await User.find({userName:{$ne: user.userName}}).limit(4)
    
    return userSuggestions
}

const editProfile = async (user, id) => {
    if(user['_id'] !== id) throw new Error('No Actualizado')
    
    const editUser = await User.findOneAndUpdate({ _id: id }, user, {new: true})

    return editUser
}

const changePassword = async ({lastPasword, newPassword}, id) => {
    const user = await User.findOne({ id })
    if (!user) throw new Error('Credenciales no validas');

    const validatePass = await hash.validatePassword(lastPasword, user.password)
    if (!validatePass) throw new Error('Password no validas');

    try {
        const newPass = await hash.generateHash(newPassword)
        await User.findOneAndUpdate({ _id: id }, {password: newPass})
        return true
    } catch (error) {
        throw new Error(error)
    }

}

module.exports = { 
    createUserController, 
    loginUser, 
    getUser, 
    getSearch, 
    getAvatar, 
    updateAvatar, 
    deleteAvatar,
    getUserSuggestions,
    editProfile,
    changePassword
}