'use strict'

const Score = require('../../models/score')

function getScoreById(request, response) {
	let scoreId = request.params.scoreId
	let dataBaseError = [];
	Score.findById(scoreId, (error, scoreStored) => {
		if(error){
			dataBaseError.push("Data base Error");
			dataBaseError.push(error);
			return response.status(500).send({dataBaseError})
		}
		if(!scoreStored) {
			return response.status(404).send({message: 'Score does not exist'})
		}
		response.status(200).send({scoreStored})
	})
}

module.exports = {
	getScoreById
}
