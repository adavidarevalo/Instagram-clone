const {awsUpdateAvatar, awsDeleteAvatar} = require('./aws/avatar')
const { v4: uuidv4 } = require("uuid");

const uploadImage = async (file, path) => {
    const {createReadStream, mimetype} = await file
    const extension = mimetype.split('/')[1]
    const imageName = `${path}/${uuidv4()}.${extension}`
    const fileData = createReadStream()

    try {
        const result = await awsUpdateAvatar(fileData, imageName)
        return result
    } catch (error) {
        console.error(error)
        throw new Error()
    }
}

const deleteAvatarFn = async (path) => {
    const url = 'https://instagram-david.s3.amazonaws.com/'
    const deletePath = path.replace(url, '')

    try {
        await awsDeleteAvatar(deletePath)
    } catch (error) {
        console.error(error)
        throw new Error()
    }
}


module.exports = {uploadImage, deleteAvatarFn}