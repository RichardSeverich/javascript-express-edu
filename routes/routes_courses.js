'use strict'

const express = require('express')
const api = express.Router()

// Declare Instances of Controllers
const controllerCourseGet =  require('../controllers/courses/controller_course_get')
const controllerCourseGetById = require('../controllers/courses/controller_course_get_by_id')
const controllerCoursePost = require('../controllers/courses/controller_course_post')
const controllerCoursePut = require('../controllers/courses/controller_course_put.js')
const controllerCourseDelete = require('../controllers/courses/controller_course_delete')

//Mapping EndPoints
api.get('/courses', controllerCourseGet.getCourses)
api.get('/courses/:courseId', controllerCourseGetById.getCourseById)
api.post('/courses', controllerCoursePost.saveCourse)
api.put('/courses/:courseId', controllerCoursePut.updateCourse)
api.delete('/courses/:courseId', controllerCourseDelete.deleteCourse)

module.exports = api
