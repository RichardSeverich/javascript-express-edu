'use strict'

const User =require('../../models/user')

function updateUser(request, response) {

	let userId = request.params.userId
	let body_update = request.body
	User.findByIdAndUpdate(userId, body_update, (err, userUpdated) => {
		if(err) { 
			return response.status(500).send({message: `error to performs update to mongoDB: ${err}`}) 
		}
		response.status(200).send({userUpdated: body_update})
	})
}

module.exports = {
	updateUser
}
