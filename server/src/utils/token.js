const jwt = require('jsonwebtoken')

const createToken = (user) => {
    const { name, _id, email, userName } = user;
    const payload = {
        _id,
        name,
        email,
        userName
    }
    return jwt.sign(payload, process.env.SECRET_KEY)
}

const verifyToken = (token) => {
    return jwt.verify(token, process.env.SECRET_KEY)
}

module.exports = { createToken, verifyToken }