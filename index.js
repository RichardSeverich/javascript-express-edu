'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res) => {
if(err){
	return console.log(`MongoDB connection error ${err}`)
}
console.log('Successful Connection')

app.listen(config.port, () => {
	console.log(`API IS RUNNING IN http://localhost:${config.port}`)
})

})
