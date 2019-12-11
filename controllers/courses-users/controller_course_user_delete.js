'use strict'

const CourseUser = require('../../models/course-user')

function deleteCourseUser(request, response) {
	let courseUserId = request.params.courseId
	let dataBaseError = [];
	CourseUser.findByIdAndRemove(courseUserId, (error, courseUserStored) => {
		if(error){
			dataBaseError.push("Data base Error");
			dataBaseError.push(error);
			return response.status(500).send({dataBaseError})
		}
		if(!courseUserStored) {
			return response.status(404).send({message: 'CourseUser relation does not exist'})
		}
		response.status(200).send({message: 'CourserUser relation was deleted successfully'})
	})
}

module.exports = {
	deleteCourseUser
}
