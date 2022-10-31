const mongoose = require('mongoose')
const categories = require('../categories')

const playerStatsSchema = new mongoose.Schema(
    {
        'General Knowledge': {
            type: Number,
            required: true,
            default: 0
        },
        'Entertainment: Books': {
            type: Number,
            required: true,
            default: 0
        },
        'Entertainment: Film': {
            type: Number,
            required: true,
            default: 0
        },
        'Entertainment: Music': {
            type: Number,
            required: true,
            default: 0
        },
        'Entertainment: Musicals & Theatres': {
            type: Number,
            required: true,
            default: 0
        },
        'Entertainment: Television': {
            type: Number,
            required: true,
            default: 0
        },
        'Entertainment: Video Games': {
            type: Number,
            required: true,
            default: 0
        },
        'Entertainment: Board Games': {
            type: Number,
            required: true,
            default: 0
        },
        'Science & Nature': {
            type: Number,
            required: true,
            default: 0
        },
        'Science: Mathematics': {
            type: Number,
            required: true,
            default: 0
        },
        'Science: Computers': {
            type: Number,
            required: true,
            default: 0
        },
        'Science: Gadgets': {
            type: Number,
            required: true,
            default: 0
        },
        'Mythology': {
            type: Number,
            required: true,
            default: 0
        },
        'Sports': {
            type: Number,
            required: true,
            default: 0
        },
        'Geography': {
            type: Number,
            required: true,
            default: 0
        },
        'History': {
            type: Number,
            required: true,
            default: 0
        },
        'Politics': {
            type: Number,
            required: true,
            default: 0
        },
        'Art': {
            type: Number,
            required: true,
            default: 0
        },
        'Celebrities': {
            type: Number,
            required: true,
            default: 0
        },
        'Animals': {
            type: Number,
            required: true,
            default: 0
        },
        'Vehicles': {
            type: Number,
            required: true,
            default: 0
        },
        'Entertainment: Comics': {
            type: Number,
            required: true,
            default: 0
        },
        'Entertainment: Japanese Anime & Manga': {
            type: Number,
            required: true,
            default: 0
        },
        'Entertainment: Cartoon & Animations': {
            type: Number,
            required: true,
            default: 0
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }
)

playerStatsSchema.virtual('totalScore').get(function() {
    let total = 0
    categories.forEach(field => {
        total += this[field]
    })
    return total
})

module.exports = playerStatsSchema