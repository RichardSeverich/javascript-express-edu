'use strict'

const express = require('express')
const api = express.Router()

// Declare Instances of Controllers
const controllerScoreGet =  require('../controllers/scores/controller_score_get')
const controllerScoreGetById = require('../controllers/scores/controller_score_get_by_id')
const controllerScorePost = require('../controllers/scores/controller_score_post')
const controllerScorePut = require('../controllers/scores/controller_score_put.js')
const controllerScoreDelete = require('../controllers/scores/controller_score_delete')

//Mapping EndPoints
api.get('/scores', controllerScoreGet.getScores)
api.get('/scores/:scoreId', controllerScoreGetById.getScoreById)
api.post('/scores', controllerScorePost.saveScore)
api.put('/scores/:scoreId', controllerScorePut.updateScore)
api.delete('/scores/:scoreId', controllerScoreDelete.deleteScore)

module.exports = api
