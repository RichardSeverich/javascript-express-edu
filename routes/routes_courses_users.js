'use strict'

const express = require('express')
const api = express.Router()

// Declare Instances of Controllers
const controllerCourseUserGet =  require('../controllers/courses-users/controller_course_user_get')
const controllerCourseUserGetById = require('../controllers/courses-users/controller_course_user_get_by_id')
const controllerCourseUserPost = require('../controllers/courses-users/controller_course_user_post')
const controllerCourseUserPut = require('../controllers/courses-users/controller_course_user_put.js')
const controllerCourseUserDelete = require('../controllers/courses-users/controller_course_user_delete')

//Mapping EndPoints
api.get('/courses-users', controllerCourseUserGet.getCoursesUsers)
api.get('/courses-users/:courseUserId', controllerCourseUserGetById.getCourseUserById)
api.post('/courses-users', controllerCourseUserPost.saveCourseUser)
api.put('/courses-users/:courseUserId', controllerCourseUserPut.updateCourseUser)
api.delete('/courses-users/:courseUserId', controllerCourseUserDelete.deleteCourseUser)

module.exports = api
