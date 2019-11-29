'use strict'

const Course = require('../../models/course')

function getCourses(request, response) {
	let dataBaseError = [];
	Course.find({},(error, courses) => {
		if (error) {
			dataBaseError.push("Data base Error");
			dataBaseError.push(error);
			return response.status(500).send({dataBaseError})
		}
		response.status(200).send({courses})
	})
}

module.exports = {
	getCourses
}
