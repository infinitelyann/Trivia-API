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
            enum: [
                'General Knowledge',
                'Entertainment: Books',
                'Entertainment: Film',
                'Entertainment: Music',
                'Entertainment: Musicals & Theatres',
                'Entertainment: Television',
                'Entertainment: Video Games',
                'Entertainment: Board Games',
                'Science & Nature',
                'Science: Computers',
                'Science: Mathematics',
                'Science: Gadgets',
                'Mythology',
                'Sports',
                'Geography',
                'History',
                'Politics',
                'Art',
                'Celebrities',
                'Animals',
                'Vehicles',
                'Entertainment: Comics',
                'Entertainment: Japanese Anime & Manga',
                'Entertainment: Cartoon & Animations'
            ]
        },
        type: {
            type: String,
            required: true,
            enum: ['Multiple Choice', 'True / False']
        },
        owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    }
)

module.exports = mongoose.model('Question', questionSchema)

// leaderboard might be subdocument
// virtuals could aggregate scores for leaderboard