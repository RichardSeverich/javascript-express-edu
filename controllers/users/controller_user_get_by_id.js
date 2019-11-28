'use strict'

const User = require('../../models/user')

function getUserById(request, response) {
	let userId = request.params.userId
	let dataBaseError = [];
	User.findById(userId, (error, userStored) => {
		if(error){
			dataBaseError.push("Data base Error");
			dataBaseError.push(error);
			return response.status(500).send({dataBaseError})
		}
		if(!userStored) {
			return response.status(404).send({message: 'User does not exist'})
		}
		response.status(200).send({userStored})
	})
}

module.exports = {
	getUserById
}
