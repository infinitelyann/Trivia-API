const mongoose = require('mongoose')
const categories = require('../categories')


const playerStatsSchema = new mongoose.Schema(
    {
        genKnowledge: {
            // General Knowledge
            type: Number,
            required: true,
            default: 0
        },
        entBooks: {
            // Entertainment: Books
            type: Number,
            required: true,
            default: 0
        },
        entFilm: {
            // Entertainment: Film
            type: Number,
            required: true,
            default: 0
        },
        entMusic: {
            // Entertainment: Music
            type: Number,
            required: true,
            default: 0
        },
        entMusicalTheatre: {
            // Entertainment: Musicals & Theatres
            type: Number,
            required: true,
            default: 0
        },
        entTV: {
            // Entertainment: Television
            type: Number,
            required: true,
            default: 0
        },
        entVidGames: {
            // Entertainment: Video Games
            type: Number,
            required: true,
            default: 0
        },
        entBoardGames: {
            // Entertainment: Board Games
            type: Number,
            required: true,
            default: 0
        },
        sciNature: {
            // Science & Nature
            type: Number,
            required: true,
            default: 0
        },
        sciMath: {
            // Science: Mathematics
            type: Number,
            required: true,
            default: 0
        },
        sciComputers: {
            // Science: Computers
            type: Number,
            required: true,
            default: 0
        },
        sciGadgets: {
            // Science: Gadgets
            type: Number,
            required: true,
            default: 0
        },
        mythology: {
            type: Number,
            required: true,
            default: 0
        },
        sports: {
            type: Number,
            required: true,
            default: 0
        },
        geography: {
            type: Number,
            required: true,
            default: 0
        },
        history: {
            type: Number,
            required: true,
            default: 0
        },
        politics: {
            type: Number,
            required: true,
            default: 0
        },
        art: {
            type: Number,
            required: true,
            default: 0
        },
        celebrities: {
            type: Number,
            required: true,
            default: 0
        },
        animals: {
            type: Number,
            required: true,
            default: 0
        },
        vehicles: {
            type: Number,
            required: true,
            default: 0
        },
        entComics: {
            // Entertainment: Comics
            type: Number,
            required: true,
            default: 0
        },
        entJapan: {
            // Entertainment: Japanese Anime & Manga
            type: Number,
            required: true,
            default: 0
        },
        entToons: {
            // Entertainment: Cartoon & Animations
            type: Number,
            required: true,
            default: 0
        }
    },
	{
        timestamps: true,
        toObject: { virtuals: true },
        toJSON: { virtuals: true }
	}
)

playerStatsSchema.virtual('totalScore').get(function() {
    let total = 0
    const schemaKeys = Object.keys(playerStatsSchema.toObject())
    schemaKeys.forEach(key => {
        if (Number.isInteger(this[key])) {
            total += this[key]
        }
    })
    return total
})

module.exports = playerStatsSchema