'use strict'

const User = require('../../models/user')
const Mapping = require('../../mapping/user')
const Validator = require('../../validators/user')


function saveUser(request, response) {
	// Validation Undefined
	let user = Mapping.mapping(request);
	let validationMessage = Validator.validatorUndefined(user);
	if(validationMessage.length == 0){
	    validationMessage = Validator.validatorGeneric(user);
	}
	// Validation Generic
	if(validationMessage.length > 0){
		return response.status(400).send({validationMessage});
	}
	// Data Bases Connection.
	let dataBaseError = [];
	user.save((error, userStored) => {
		if(error) { 
			dataBaseError.push("Data base Error");
			dataBaseError.push(error);
			if(error.code = 11000){
				return response.status(400).send({dataBaseError})
			}
			return response.status(500).send({dataBaseError})
		}
	    return response.status(201).send({message: 'The user was stored successfully'})
	})
}

module.exports = {
	saveUser
}
