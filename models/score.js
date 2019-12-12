'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ScoreSchema = Schema({
	_id: String,
    id_user: String,
	id_module: String,
	value: String
})

module.exports = mongoose.model('Score', ScoreSchema, 'score')
