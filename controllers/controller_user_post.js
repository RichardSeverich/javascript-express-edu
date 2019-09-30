'use strict'

const User = require('../models/user')

function saveUser(request, response) {
	//console.log('POST  /api/clients')
	//console.log(request.body)
	let user = new User()
	user.id = request.body.id
	user.password = request.body.password
	user.name = request.body.name
	user.last_name= request.body.last_name
	user.career= request.body.career
	user.email= request.body.email
	user.type= request.body.type
	
	user.save((err, userStored) => {
		if(err) { 
			return response.status(500).send({message: `error to performs request to mongoDB: ${err}`}) 
		}
	response.status(201).send({user: userStored})
	})
}

module.exports = {
	saveUser
}
