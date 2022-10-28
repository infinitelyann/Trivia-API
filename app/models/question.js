const mongoose = require('mongoose')

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
        category: {
            type: String,
            required: true,
            enum: []
        },
        type: {
            type: String,
            required: true,
            enum: ['Multiple Choice', 'True / False']
        },
        isUserSubmitted: {
            type: Boolean,
            required: true
        }
    }
)

module.exports = mongoose.model('Question', questionSchema)