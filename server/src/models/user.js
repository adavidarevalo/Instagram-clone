const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    userName: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    avatar: {
        type: String,
        trim: true,
    },
    webSite: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    password: {
        type: String,
        trim: true,
        require: true
    },
    phoneNumber: {
        type: String,
        trim: true,
    },
    gender: {
        type: String,
        trim: true,
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("User", UserSchema)