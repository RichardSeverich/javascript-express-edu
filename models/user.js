'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = Schema({
	_id: String,
	nick_name: String,
	password: String,
	name: String,
	last_name: String,
	career: String,
	email: String,
	type: String
})

module.exports = mongoose.model('User', UserSchema, 'user')
