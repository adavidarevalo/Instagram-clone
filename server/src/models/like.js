const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LikeSchema = Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    postId: {
        type: String,
    },
    createAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model("Like", LikeSchema)