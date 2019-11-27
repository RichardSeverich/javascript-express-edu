'use strict'

const User = require('../models/user')

function mapping(request){
	let user = new User()
	user._id = request.body._id
	user.nick_name = request.body.nick_name
	user.password = request.body.password
	user.name = request.body.name
	user.last_name= request.body.last_name
	user.career= request.body.career
	user.email= request.body.email
    user.type= request.body.type
    return user;
}

module.exports = {
	mapping
}