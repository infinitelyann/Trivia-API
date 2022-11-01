const mongoose = require('mongoose')
const playerStatsSchema = require('./playerStats')

const userSchema = new mongoose.Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
		},
		hashedPassword: {
			type: String,
			required: true,
		},
        playerStats: playerStatsSchema,
        flaggedQuestions: {
            type: Array,
            required: true
        },
		token: String
	},
	{
		timestamps: true,
		// this is a validator, it removes the password field from the object when returning a user
		toObject: {
			virtuals: true,
			// remove `hashedPassword` field when we call `.toObject`
			transform: (_doc, user) => {
				delete user.hashedPassword
				return user
			},
		},
		toJSON: {
			virtuals: true,
			// remove `hashedPassword` field when we call `.toObject`
			transform: (_doc, user) => {
				delete user.hashedPassword
				return user
			}
		}
	}
)

userSchema.virtual('username').get(function() {
	return this.email.slice(0, this.email.indexOf('@'))
})

// TODO -> Virtuals that use playerStats to return leaderboard relevant data
//separating user/owner is not necessary- conditional is post request?
//user should own/edit games w/ questions pulled from API-user form similar to API
// TODO -> Virtuals that use playerStats to return leaderboard relevant data

module.exports = mongoose.model('User', userSchema)

//what does playerStats look like?