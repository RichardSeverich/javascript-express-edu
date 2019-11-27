'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RatingSchema = Schema({
	_id: String,
    id_user: String,
	id_module: String
})

module.exports = mongoose.model('Rating', RatingSchema, 'rating')
