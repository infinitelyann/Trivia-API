const mongoose = require('mongoose')

const playerStatsSchema = new mongoose.Schema(
    {
        'General Knowledge': {
            type: Number,
            required: true
        },
        'Entertainment: Books': {
            type: Number,
            required: true
        },
        'Entertainment: Film': {
            type: Number,
            required: true
        },
        'Entertainment: Music': {
            type: Number,
            required: true
        },
        'Entertainment: Musicals & Theatres': {
            type: Number,
            required: true
        },
        'Entertainment: Television': {
            type: Number,
            required: true
        },
        'Entertainment: Video Games': {
            type: Number,
            required: true
        },
        'Entertainment: Board Games': {
            type: Number,
            required: true
        },
        'Science & Nature': {
            type: Number,
            required: true
        },
        'Science: Mathematics': {
            type: Number,
            required: true
        },
        'Science: Computers': {
            type: Number,
            required: true
        },
        'Science: Gadgets': {
            type: Number,
            required: true
        },
        'Mythology': {
            type: Number,
            required: true
        },
        'Sports': {
            type: Number,
            required: true
        },
        'Geography': {
            type: Number,
            required: true
        },
        'History': {
            type: Number,
            required: true
        },
        'Politics': {
            type: Number,
            required: true
        },
        'Art': {
            type: Number,
            required: true
        },
        'Celebrities': {
            type: Number,
            required: true
        },
        'Animals': {
            type: Number,
            required: true
        },
        'Vehicles': {
            type: Number,
            required: true
        },
        'Entertainment: Comics': {
            type: Number,
            required: true
        },
        'Entertainment: Japanese Anime & Manga': {
            type: Number,
            required: true
        },
        'Entertainment: Cartoon & Animations': {
            type: Number,
            required: true
        }
    }
)

module.exports = playerStatsSchema