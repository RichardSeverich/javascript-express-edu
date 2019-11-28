'use strict'

const User =require('../../models/user')
const Mapping = require('../../mapping/user')
const Validator = require('../../validators/user')

function updateUser(request, response) {
	let user = Mapping.mapping(request);
	user._id=request.params.userId
	let messages = Validator.validatorGeneric(user);
	if(messages.length > 0){
		return response.status(400).send({messages});
	}
	let userId = request.params.userId
	let body_update = request.body
	User.findByIdAndUpdate(userId, body_update, (err, userUpdated) => {
		if(err) { 
			return response.status(500).send({message: `error to performs update to mongoDB: ${err}`}) 
		}
		response.status(200).send({userUpdated: body_update})
	})
}

module.exports = {
	updateUser
}
