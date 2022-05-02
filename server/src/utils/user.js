const user = require('../models/user')

const getUser = async (value) => {
    const validateUser = await user.findOne(value)
    if (!validateUser) throw new Error('User not found')
    return validateUser
}

module.exports = getUser;