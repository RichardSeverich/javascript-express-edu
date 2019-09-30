'use strict'

const User =require('../../models/user')

function deleteUser(request, response) {
	let userId = request.params.userId
	User.findByIdAndRemove(userId, (err, userStored) => {
		if(err){
			return response.status(500).send({message: `error to performs request to mongoDB: ${err}`})
		}
		response.status(200).send({message: 'the user was deleted successfully'})
	})
}

module.exports = {
	deleteUser
}
