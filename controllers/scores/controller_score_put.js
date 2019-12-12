'use strict'

const Score =require('../../models/score')
const Validator = require('../../validators/score')

function updateScore(request, response) {
	// Validation Undefined
	let score = new Score();
    score._id = request.params.scoreId;
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
	Score.findByIdAndUpdate(score._id, score, (error, scoreUpdated) => {
		if(error) { 
			dataBaseError.push("Data base Error");
			dataBaseError.push(error);
			if(error.code = 11000){
				return response.status(400).send({dataBaseError})
			}
			return response.status(500).send({dataBaseError})
		}
		if(!scoreUpdated) {
			return response.status(404).send({message: 'score does not exist'})
		}
		response.status(200).send({message: "The score was updated successfully"})
	})
}

module.exports = {
	updateScore
}
