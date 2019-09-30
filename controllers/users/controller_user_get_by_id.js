'use strict'

const User = require('../../models/user')

function getUserById(request, response) {
	let userId = request.params.userId
	User.findById(userId, (err, userStored) => {
		if(err){
			return response.status(500).send({message: `error to performs request to mongoDB: ${err}`})
		}
		if(!userStored) {
			return response.status(404).send({message: 'product does not exist'})
		}
		response.status(200).send({userStored})
	})
}

module.exports = {
	getUserById
}
