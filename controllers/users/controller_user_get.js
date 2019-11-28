'use strict'

const User = require('../../models/user')

function getUsers(request, response) {
	let dataBaseError = [];
	User.find({},(error, users) => {
		if (error) {
			dataBaseError.push("Data base Error");
			dataBaseError.push(error);
			return response.status(500).send({dataBaseError})
		}
		response.status(200).send({users})
	})
}

module.exports = {
	getUsers
}
