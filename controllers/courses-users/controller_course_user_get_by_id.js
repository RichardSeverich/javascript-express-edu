'use strict'

const CourseUser = require('../../models/course-user')

function getCourseUserById(request, response) {
	let courseUserId = request.params.courseId
	let dataBaseError = [];
	CourseUser.findById(courseUserId, (error, courseUserStored) => {
		if(error){
			dataBaseError.push("Data base Error");
			dataBaseError.push(error);
			return response.status(500).send({dataBaseError})
		}
		if(!courseUserStored) {
			return response.status(404).send({message: 'Course does not exist'})
		}
		response.status(200).send({courseUserStored})
	})
}

module.exports = {
	getCourseUserById
}
