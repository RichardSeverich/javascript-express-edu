'use strict'

const express = require('express')
const api = express.Router()

// Declare Instances of Controllers
const controllerUserGet =  require('../controllers/users/controller_user_get')
const controllerUserGetById = require('../controllers/users/controller_user_get_by_id')
const controllerUserPost = require('../controllers/users/controller_user_post')
const controllerUserPut = require('../controllers/users/controller_user_put.js')
const controllerUserDelete = require('../controllers/users/controller_user_delete')

//Mapping EndPoints
api.get('/users', controllerUserGet.getUsers)
api.get('/users/:userId', controllerUserGetById.getUserById)
api.post('/users', controllerUserPost.saveUser)
api.put('/users/:userId', controllerUserPut.updateUser)
api.delete('/users/:userId', controllerUserDelete.deleteUser)

module.exports = api
