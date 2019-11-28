'use strict'

const User =require('../../models/user')
const Mapping = require('../../mapping/user')
const Validator = require('../../validators/user')

function updateUser(request, response) {
	// Validation Undefined
	let user = Mapping.mapping(request);
	user._id = request.params.userId;
	let validationMessage = Validator.validatorUndefined(user);
	if(validationMessage.length == 0){
	    validationMessage = Validator.validatorGeneric(user);
	}
	// Validation Generic
	if(validationMessage.length > 0){
		return response.status(400).send({validationMessage});
	}
	//let body_update = request.body
	// Data Bases Connection.
	let dataBaseError = [];
	User.findByIdAndUpdate(user._id, user, (error, userUpdated) => {
		if(error) { 
			dataBaseError.push("Data base Error");
			dataBaseError.push(error);
			if(error.code = 11000){
				return response.status(400).send({dataBaseError})
			}
			return response.status(500).send({dataBaseError})
		}
		if(!userUpdated) {
			return response.status(404).send({message: 'User does not exist'})
		}
		response.status(200).send({message: "The user was updated successfully"})
	})
}

module.exports = {
	updateUser
}
