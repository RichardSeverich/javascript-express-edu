'use strict'

const CourseUser = require('../../models/course-user')

function getCoursesUsers(request, response) {
	let dataBaseError = [];
	CourseUser.find({},(error, courses_users) => {
		if (error) {
			dataBaseError.push("Data base Error");
			dataBaseError.push(error);
			return response.status(500).send({dataBaseError})
		}
		response.status(200).send({courses_users})
	})
}

module.exports = {
	getCoursesUsers
}
