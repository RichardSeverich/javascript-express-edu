'use strict'

const Module = require('../../models/module')

function getModules(request, response) {
	let dataBaseError = [];
	Module.find({},(error, modules) => {
		if (error) {
			dataBaseError.push("Data base Error");
			dataBaseError.push(error);
			return response.status(500).send({dataBaseError})
		}
		response.status(200).send({modules})
	})
}

module.exports = {
	getModules
}
