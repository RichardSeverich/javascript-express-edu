'use strict'
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const api_users = require('./routes/routes_users')
const api_courses = require('./routes/routes_courses')
const api_courses_users = require('./routes/routes_courses_users')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use('/api/v1', api_users)
app.use('/api/v1', api_courses)
app.use('/api/v1', api_courses_users)

module.exports = app
