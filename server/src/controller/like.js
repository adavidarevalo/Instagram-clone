const like = require('../models/like')

const likeElement = async (postId, userId) => {
    const likeResult = await like.find({postId, userId})

    if(likeResult.length > 0) {
        await like.findByIdAndDelete({_id: likeResult[0]._id})
        return false
    }
    try {
        const newLike = like({
            userId,
            postId
        })
        await newLike.save();
        return true
    } catch (error) {
        throw new Error(error)
    }
}

const isLike = async (postId, userId) => { 
    console.log('postId ', postId);
    const likeResult = await like.find({postId, userId})
    console.log('likeResult ', likeResult);
    if (likeResult.length > 0) return true
    return false
}

module.exports = {likeElement, isLike}