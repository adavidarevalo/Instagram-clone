const follow = require('../models/follows')
const getUser = require('../utils/user')

const getFollows = async (userName) => {
    const user = await getUser({ userName })
    try {
        const getList = await follow.find({ idUser: user._id }).populate("follow")
        return getList
    } catch (error) {
        throw new Error(error)
    }

}

const getFollowMe = async (userName) => {
    const user = await getUser({ userName })
    try {
        const getList = await follow.find({ follow: user._id }).populate("idUser")
        return getList
    } catch (error) {
        throw new Error(error)
    }

}

const isFollowUser = async (userName, idCtx) => {
    const user = await getUser({ userName })
    const isFollow = await follow.findOne({ idUser: idCtx, follow: user.id });

    if (isFollow) return true
    return false
}

const changeFollow = async (userName, idCtx) => {
    const user = await getUser({ userName })
    const findFollow = await follow.findOne({ idUser: idCtx, follow: user._id })

    try {
        if (findFollow) {
            await follow.findOneAndRemove({ idUser: idCtx, follow: user._id });
            return false;
        }
        if (!findFollow) {
            const newFollow = follow({
                idUser: idCtx,
                follow: user._id
            })
            await newFollow.save()
            return true
        }
    } catch (error) {
        throw new Error(error)
    }
}

module.exports = { getFollows, getFollowMe, isFollowUser, changeFollow }