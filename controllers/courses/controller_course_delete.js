'use strict'

const Course = require('../../models/course')

function deleteCourse(request, response) {
	let courseId = request.params.courseId
	let dataBaseError = [];
	Course.findByIdAndRemove(courseId, (error, courseStored) => {
		if(error){
			dataBaseError.push("Data base Error");
			dataBaseError.push(error);
			return response.status(500).send({dataBaseError})
		}
		if(!courseStored) {
			return response.status(404).send({message: 'Course does not exist'})
		}
		response.status(200).send({message: 'Course was deleted successfully'})
	})
}

module.exports = {
	deleteCourse
}
