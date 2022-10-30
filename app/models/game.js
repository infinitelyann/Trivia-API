const mongoose = require('mongoose')
const questionSchema = require('./question')

const gameSchema = new mongoose.Schema(
    {
        questions: [questionSchema],
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }
)

module.exports = mongoose.model('Game', gameSchema)