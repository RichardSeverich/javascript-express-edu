'use strict'

const Module = require('../../models/module')

function getModuleById(request, response) {
	let moduleId = request.params.moduleId
	let dataBaseError = [];
	Module.findById(moduleId, (error, moduleStored) => {
		if(error){
			dataBaseError.push("Data base Error");
			dataBaseError.push(error);
			return response.status(500).send({dataBaseError})
		}
		if(!moduleStored) {
			return response.status(404).send({message: 'Module does not exist'})
		}
		response.status(200).send({moduleStored})
	})
}

module.exports = {
	getModuleById
}
