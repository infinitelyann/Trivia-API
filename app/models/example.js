const mongoose = require('mongoose')

const exampleSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
        // playerStats: {
        //     type: Map,
		// 	of: Number,
        //     required: true
        // },
	}
)

module.exports = mongoose.model('Example', exampleSchema)
