'use strict'

const CourseUser = require('../../models/course-user')
const Validator = require('../../validators/course-user')
const mongoose = require('mongoose')

function saveCourseUser(request, response) {
	var ObjectId = mongoose.Types.ObjectId;
    // Validation Undefined
	let courseUser = new CourseUser();
	courseUser._id = new ObjectId();
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
	courseUser.save((error, courseUserStored) => {
		if(error) { 
			dataBaseError.push("Data base Error");
			dataBaseError.push(error);
			if(error.code = 11000){
				return response.status(400).send({dataBaseError})
			}
			return response.status(500).send({dataBaseError})
		}
	    return response.status(201).send({message: 'The course user relation was stored successfully'})
	})
}

module.exports = {
	saveCourseUser
}
