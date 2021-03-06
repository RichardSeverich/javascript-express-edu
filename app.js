'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api_users = require('./routes/routes_users')
const api_courses = require('./routes/routes_courses')
const api_courses_users = require('./routes/routes_courses_users')
const api_modules = require('./routes/routes_modules')
const api_scores = require('./routes/routes_scores')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/api/v1', api_users)
app.use('/api/v1', api_courses)
app.use('/api/v1', api_courses_users)
app.use('/api/v1', api_modules)
app.use('/api/v1', api_scores)

module.exports = app
