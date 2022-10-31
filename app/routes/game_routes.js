// Express docs: http://expressjs.com/en/api.html
const express = require('express')
// Passport docs: http://www.passportjs.org/docs/
const passport = require('passport')

// pull in Mongoose model for examples
////////////////////////////////
/// create and pull in game model
/////////////////////////////////
const Game = require('../models/game')

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

//////////// Index route for all user created games
// /games
router.get('/games', requireToken, (req, res, next) => {
    Game.find()
        .then((games) => {
            return games.map((game) => game.toObject())
        })
        .then((games) => res.status(200).json({games: games}))
        .catch(next)
})


////// SHOW route for a specific user created game
// /games/:id
router.get('/games/:id', requireToken, (req, res, next)=> {
    // find an individual game 
    // perhaps start a game session on user being ready?
    Game.findById(req.params.id)
        .then(handle404)
        .catch(next)
})

///// CREATE
// POST
// /games
router.post('/games', requireToken, (req, res, next) => {
    // setting game owner to current user
    // req.body.games.owner = req.user.id
    console.log("the game",req.body)
    Game.create(req.body.game)
        .then((game) => {
            res.status(201).json({ game: game})
        })
        .catch(next)
})

//UPDATE
// PATCH /games/:id
/////////// maybe remove removeBlanks and handle on client side?
router.patch('/games/:id', requireToken, removeBlanks, (req, res, next) => {
    delete req.body.game.owner

    Game.findById(req.params.id)
        .then(handle404)
        .then((game) => {
            requireOwnership(req, game)

            return game.updateOne(req.body.game)
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

//DESTROY
// DELETE /games/:id
router.delete('/games/:id', requireToken, (req, res, next) => {
    Game.findById(req.params.id)
        .then(handle404)
        .then((game) => {
            requireOwnership(req, game)
            game.deleteOne()
        })
        .then(() => res.sendStatus(204))
        .catch(next)
})

module.exports = router