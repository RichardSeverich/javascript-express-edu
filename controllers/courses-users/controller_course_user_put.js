'use strict'

const CourseUser =require('../../models/course-user')
const Validator = require('../../validators/course-user')

function updateCourseUser(request, response) {
	// Validation Undefined
	let courseUser = new CourseUser();
    courseUser._id = request.params.courseUserId;
	courseUser.id_course = request.body.id_course;
	courseUser.id_user = request.body.id_user;
	let validationMessage = Validator.validatorUndefined(courseUser);
	if(validationMessage.length == 0){
	    validationMessage = Validator.validatorGeneric(courseUser);
	}
	// Validation Generic
	if(validationMessage.length > 0){
		return response.status(400).send({validationMessage});
	}
	// Data Bases Connection.
	let dataBaseError = [];
	CourseUser.findByIdAndUpdate(courseUser._id, courseUser, (error, courseUserUpdated) => {
		if(error) { 
			dataBaseError.push("Data base Error");
			dataBaseError.push(error);
			if(error.code = 11000){
				return response.status(400).send({dataBaseError})
			}
			return response.status(500).send({dataBaseError})
		}
		if(!courseUserUpdated) {
			return response.status(404).send({message: 'CourseUser relation does not exist'})
		}
		response.status(200).send({message: "The CourseUser relation was updated successfully"})
	})
}

module.exports = {
	updateCourseUser
}
