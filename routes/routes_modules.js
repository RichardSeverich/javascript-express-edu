'use strict'

const express = require('express')
const api = express.Router()

// Declare Instances of Controllers
const controllerModuleGet =  require('../controllers/modules/controller_module_get')
const controllerModuleGetById = require('../controllers/modules/controller_module_get_by_id')
const controllerModulePost = require('../controllers/modules/controller_module_post')
const controllerModulePut = require('../controllers/modules/controller_module_put.js')
const controllerModuleDelete = require('../controllers/modules/controller_module_delete')

//Mapping EndPoints
api.get('/modules', controllerModuleGet.getModules)
api.get('/modules/:moduleId', controllerModuleGetById.getModuleById)
api.post('/modules', controllerModulePost.saveModule)
api.put('/modules/:moduleId', controllerModulePut.updateModule)
api.delete('/modules/:moduleId', controllerModuleDelete.deleteModule)

module.exports = api
