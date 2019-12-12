'use strict'

const Score = require('../../models/score')
const Validator = require('../../validators/score')
const mongoose = require('mongoose')

function saveScore(request, response) {
	var ObjectId = mongoose.Types.ObjectId;
    // Validation Undefined
	let score = new Score();
	score._id = new ObjectId();
	score.id_module = request.body.id_module;
	score.id_user = request.body.id_user;
	score.value = request.body.value;
	let validationMessage = Validator.validatorUndefined(score);
	if(validationMessage.length == 0){
	    validationMessage = Validator.validatorGeneric(score);
	}
	// Validation Generic
	if(validationMessage.length > 0){
		return response.status(400).send({validationMessage});
	}
	// Data Bases Connection.
	let dataBaseError = [];
	score.save((error, scoreStored) => {
		if(error) { 
			dataBaseError.push("Data base Error");
			dataBaseError.push(error);
			if(error.code = 11000){
				return response.status(400).send({dataBaseError})
			}
			return response.status(500).send({dataBaseError})
		}
	    return response.status(201).send({message: 'The score was stored successfully'})
	})
}

module.exports = {
	saveScore
}
