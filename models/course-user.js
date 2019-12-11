'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CourseUserSchema = Schema({
    _id: String,
    id_course: { type: String, ref: 'course' },
    id_user: { type: String, ref: 'user' }
})

module.exports = mongoose.model('CourseUser', CourseUserSchema, 'course_user')
