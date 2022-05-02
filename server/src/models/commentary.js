const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const CommentarySchema = new Schema({
    idUser: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    idPost: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Post"
    },
    commentary: {
        type: String,
        trim: true,
        required: true,
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Commentary", CommentarySchema)