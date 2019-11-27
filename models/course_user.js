'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CourseUserSchema = Schema({
	_id: String,
    id_couser: String,
    id_user: String
})

module.exports = mongoose.model('CourseUser', CourseUserSchema, 'course_user')
