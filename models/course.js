'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CourseSchema = Schema({
	_id: String,
	name: String
})

module.exports = mongoose.model('Course', CourseSchema, 'course')
