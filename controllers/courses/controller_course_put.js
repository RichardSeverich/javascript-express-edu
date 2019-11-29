'use strict'

const Course =require('../../models/course')
const Validator = require('../../validators/course')

function updateCourse(request, response) {
	// Validation Undefined
	let course = new Course();
    course._id = request.params.courseId;
    course.name = request.body.name;
	let validationMessage = Validator.validatorUndefined(course);
	if(validationMessage.length == 0){
	    validationMessage = Validator.validatorGeneric(course);
	}
	// Validation Generic
	if(validationMessage.length > 0){
		return response.status(400).send({validationMessage});
	}
	// Data Bases Connection.
	let dataBaseError = [];
	Course.findByIdAndUpdate(course._id, course, (error, courseUpdated) => {
		if(error) { 
			dataBaseError.push("Data base Error");
			dataBaseError.push(error);
			if(error.code = 11000){
				return response.status(400).send({dataBaseError})
			}
			return response.status(500).send({dataBaseError})
		}
		if(!courseUpdated) {
			return response.status(404).send({message: 'Course does not exist'})
		}
		response.status(200).send({message: "The course was updated successfully"})
	})
}

module.exports = {
	updateCourse
}
