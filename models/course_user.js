'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CourseUserSchema = Schema({
    id_couser: { type: ObjectId, ref: 'course' },
    id_user: { type: String, ref: 'user' },
})

module.exports = mongoose.model('CourseUser', CourseUserSchema, 'course_user')
