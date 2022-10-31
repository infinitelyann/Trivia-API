const mongoose = require('mongoose')
const categories = require('../categories')

const questionSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            required: true
        },
        correctAnswer: {
            type: String,
            required: true
        },
        incorrectAnswers: {
            type: Array,
            required: true
        },
        // elapsedTime: {
        //     type: Number,
        //     required: true
        // },
        category: {
            type: String,
            required: true,
            enum: categories
        },
        type: {
            type: String,
            required: true,
            enum: ['Multiple Choice', 'True / False']
        },
        difficulty: {
            type: String,
            required: true,
            enum: ['Easy', 'Medium', 'Hard']
        },
        // owner: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: 'User'
        // }
    }
)

module.exports =  questionSchema

// leaderboard might be subdocument
// virtuals could aggregate scores for leaderboard
// timer will be virtual using new Date()