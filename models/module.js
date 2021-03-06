'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ModuleSchema = Schema({
	_id: String,
	name: String
})

module.exports = mongoose.model('Module', ModuleSchema, 'module')