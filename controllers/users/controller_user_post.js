'use strict'

const User = require('../../models/user')
const Mapping = require('../../mapping/user')
const Validator = require('../../validators/user')

function saveUser(request, response) {
	let user = Mapping.mapping(request);
	let validationMessage = Validator.validator(user);
	if(validationMessage !== 'Validation-Errors'){
		return response.status(400).send({message: validationMessage});
	}
	user.save((err, userStored) => {
		if(err) { 
			return response.status(500).send({message: `error to performs request to mongoDB: ${err}`}) 
	    }
	//response.status(201).send({user: userStored})
	return response.status(201).send({message: 'The user was stored successfully'})
	})
}

module.exports = {
	saveUser
}
