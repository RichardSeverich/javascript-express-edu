'use strict'

const Module = require('../../models/module')
const Validator = require('../../validators/module')
const mongoose = require('mongoose')

function saveModule(request, response) {
	var ObjectId = mongoose.Types.ObjectId;
    // Validation Undefined
	let module = new Module();
	module._id = new ObjectId();
    module.name = request.body.name;
	let validationMessage = Validator.validatorUndefined(module);
	if(validationMessage.length == 0){
	    validationMessage = Validator.validatorGeneric(module);
	}
	// Validation Generic
	if(validationMessage.length > 0){
		return response.status(400).send({validationMessage});
	}
	// Data Bases Connection.
	let dataBaseError = [];
	module.save((error, moduleStored) => {
		if(error) { 
			dataBaseError.push("Data base Error");
			dataBaseError.push(error);
			if(error.code = 11000){
				return response.status(400).send({dataBaseError})
			}
			return response.status(500).send({dataBaseError})
		}
	    return response.status(201).send({message: 'The module was stored successfully'})
	})
}

module.exports = {
	saveModule
}
