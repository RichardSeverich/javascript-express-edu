'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api_users = require('./routes/routes_users')
const api_courses = require('./routes/routes_courses')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/api/v1', api_users)
app.use('/api/v1', api_courses)

module.exports = app
