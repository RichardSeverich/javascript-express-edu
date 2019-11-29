'use strict'

const Course = require('../../models/course')
const Validator = require('../../validators/course')
const mongoose = require('mongoose')

function saveCourse(request, response) {
	var ObjectId = mongoose.Types.ObjectId;
    // Validation Undefined
	let course = new Course();
	course._id = new ObjectId();
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
	course.save((error, courseStored) => {
		if(error) { 
			dataBaseError.push("Data base Error");
			dataBaseError.push(error);
			if(error.code = 11000){
				return response.status(400).send({dataBaseError})
			}
			return response.status(500).send({dataBaseError})
		}
	    return response.status(201).send({message: 'The course was stored successfully'})
	})
}

module.exports = {
	saveCourse
}
