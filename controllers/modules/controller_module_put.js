'use strict'

const Module =require('../../models/module')
const Validator = require('../../validators/module')

function updateModule(request, response) {
	// Validation Undefined
	let module = new Module();
    module._id = request.params.moduleId;
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
	Module.findByIdAndUpdate(module._id, module, (error, moduleUpdated) => {
		if(error) { 
			dataBaseError.push("Data base Error");
			dataBaseError.push(error);
			if(error.code = 11000){
				return response.status(400).send({dataBaseError})
			}
			return response.status(500).send({dataBaseError})
		}
		if(!moduleUpdated) {
			return response.status(404).send({message: 'module does not exist'})
		}
		response.status(200).send({message: "The module was updated successfully"})
	})
}

module.exports = {
	updateModule
}
