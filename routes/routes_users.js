'use strict'

const express = require('express')
const api = express.Router()

// Declare Instances of Controllers
const controllerUserGet =  require('../controllers/controller_user_get')
//const CtrlClientsGetById = require('../controllers/controller_client_get_by_id')
const controllerUserPost = require('../controllers/controller_user_post')
//const CtrlClientsPut = require('../controllers/controller_client_put.js')
//const CtrlClientsDelete = require('../controllers/controller_client_delete')

//Mapping EndPoints
api.get('/users', controllerUserGet.getUsers)
//api.get('/clients/:clientId', CtrlClientsGetById.getClientById)
api.post('/users', controllerUserPost.saveUser)
//api.put('/clients/:clientId', CtrlClientsPut.updateClient)
//api.delete('/clients/:clientId', CtrlClientsDelete.deleteClient)

module.exports = api
