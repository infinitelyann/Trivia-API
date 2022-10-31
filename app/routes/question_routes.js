// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404
// we'll use this function to send 401 when a user tries to modify a resource
// that's owned by someone else
const requireOwnership = customErrors.requireOwnership

// this is middleware that will remove blank fields from `req.body`, e.g.
// { example: { title: '', text: 'foo' } } -> { example: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')
// passing this as a second argument to `router.<verb>` will make it
// so that a token MUST be passed for that route to be available
// it will also set `req.user`
const requireToken = passport.authenticate('bearer', { session: false })

// instantiate a router (mini app that only handles routes)
const router = express.Router()

const Game = require('../models/game')

//////////////////////
// CREATE
//// POST
router.post('/questions/:gameId', requireToken, (req, res, next) => {
    const question = req.body.question
    const gameId = req.params.gameId
    Game.findById(gameId)
        .then(handle404)
        .then((game) => {
            game.questions.push(question)
            return game.save() 
        })
        .then(game => res.status(201).json({game: game}))
        .catch(next)
})


////////////////////
// UPDATE
/// PATCH updating a question
/// /games/<game_id>/<question_id>
router.patch('/questions/:gameId/:questionId', requireToken, (req, res, next) => {
    const { gameId, questionId } = req.params
 
    Game.findById(gameId)
        .then(handle404)

        .then((game) => {
            // console.log(game.questions)
            const theQuestion = game.questions.id(questionId)
            console.log("the game",game)
            console.log("the user", req.user._id)
            requireOwnership(req, game)
            theQuestion.set(req.body.question)
            return game.save()
        })
        .then(game => res.sendStatus(204))
        .catch(next)
})


/// DELETE / DESTROY
// /games/<game_id>/<question_id>
router.delete('/questions/:gameId/:questionId', requireToken, (req, res, next) => {
    const { gameId, questionId } = req.params
    Game.findById(gameId)
        .then(handle404)
        .then(game => {
            const theQuestion = game.questions.id(questionId)
            requireOwnership(req, game)
            theQuestion.remove()
            return game.save()
        })
        .then(game => res.sendStatus(204))
        .catch(next)
})


module.exports = router