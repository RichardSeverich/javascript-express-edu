'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema({
	id: Number,
	password: String,
	name: String,
	last_name: String,
	career: String,
	email: String,
	type: String
})

module.exports = mongoose.model('User', UserSchema, 'user')
