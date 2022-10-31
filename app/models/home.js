const mongoose = require('mongoose')
const gameSchema = require('./game')
const playerStatsSchema = require('./playerStats')

const homeSchema = new mongoose.Schema(
    {
        // game: [gameSchema],
        questions: [playerStatsSchema],
        // owner: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'User'
        // }
    },
    {
        timestamps: true,
        // toObject: { virtuals: true },
        // toJSON: { virtuals: true }
    }
)

module.exports = mongoose.model('home', homeSchema)