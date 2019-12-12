'use strict'

const Score = require('../../models/score')

function getScores(request, response) {
	let dataBaseError = [];
	Score.find({},(error, scores) => {
		if (error) {
			dataBaseError.push("Data base Error");
			dataBaseError.push(error);
			return response.status(500).send({dataBaseError})
		}
		response.status(200).send({scores})
	})
}

module.exports = {
	getScores
}
