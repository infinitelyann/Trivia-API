const mongoose = require('mongoose')
const questionSchema = require('./question')

const gameSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        questions: [questionSchema],
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        timestamps: true,
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
    }
)

module.exports = mongoose.model('Game', gameSchema)



