'use strict'

const User = require('../models/user')

function getUsers(request, response) {
	User.find({},(err, user) => {
		if (err) {
			return response.status(500).send({message: `error to performs request to mongoDB: ${err}`})
		}
		response.status(200).send({user})
	})
}

module.exports = {
	getUsers
}
