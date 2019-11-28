'use strict'

const User =require('../../models/user')

function deleteUser(request, response) {
	let userId = request.params.userId
	let dataBaseError = [];
	User.findByIdAndRemove(userId, (error, userStored) => {
		if(error){
			dataBaseError.push("Data base Error");
			dataBaseError.push(error);
			return response.status(500).send({dataBaseError})
		}
		if(!userStored) {
			return response.status(404).send({message: 'User does not exist'})
		}
		response.status(200).send({message: 'User was deleted successfully'})
	})
}

module.exports = {
	deleteUser
}
