const bcrypt = require("bcrypt");

const generateHash = async (password) => {
    const salt = await bcrypt.genSaltSync(10)
    const newPassword = await bcrypt.hash(password, salt)
    return newPassword;
};

const validatePassword = async (password, dbPassword) => {
    const verified = await bcrypt.compare(password, dbPassword);
    return verified
}

module.exports = { generateHash, validatePassword };
