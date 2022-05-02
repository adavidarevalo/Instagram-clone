const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = Schema({
    file: {
        type: String,
        trim: true,
        required: true
    },
    typeFile: {
        type: String,
        trim: true,
    },
    idUser: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    description: {
        type: String,
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Post", PostSchema)