'use strict'

function validator(user){
    const _id = user._id;
    const nick_name = user.nick_name;
    const password = user.password;
    const last_name = user.last_name;
    const name = user.name;
    const career = user.career;
    const email = user.email;
    const type = user.type;
    let message = "Validation-Errors";

    if(_id.length > 7 || _id.length < 7){
        //throw new Error('_id must be with 7 characters');
        message = message + "  ";
        message = message + '_id must be with 7 characters';
    }

    if(nick_name.length < 3 || nick_name.length > 7){
        //throw new Error('nick_name must be between 3 and 7 characters');
        message = message + "  ";
        message = message + 'nick_name must be between 3 and 7 characters';
    }

    if(password.length < 3 || password.length > 7){
        //throw new Error('password must be between 3 and 7 characters');
        message = message + "  ";
        message = message + 'password must be between 3 and 7 characters';
    }

    if(name.length < 3 || name.length > 24){
        //throw new Error('name must be between 3 and 24 characters');
        message = message + "  ";
        message = message + 'name must be between 3 and 24 characters';
    }

    if(last_name.length < 3 || last_name.length > 24){
        //throw new Error('last_name must be between 3 and 24 characters');
        message = message + "  ";
        message = message + 'last_name must be between 3 and 24 characters';
    }

    if(career.length < 3 || career.length > 24){
        //throw new Error('career must be between 3 and 24 characters');
        message = message + "  ";
        message = message + 'career must be between 3 and 24 characters';
    }

    if(email.length < 5 || email.length > 32){
        //throw new Error('career must be between 5 and 32 characters');
        message = message + "  ";
        message = message + 'career must be between 5 and 32 characters';
    }

    if(type.length < 3 || type.length > 10){
        //throw new Error('type must be between 3 and 10 characters');
        message = message + "  ";
        message = message + 'type must be between 3 and 10 characters';
    }
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regex.test(email)){
        //throw new Error('email must be like someone@emailserver.com');
        message = message + "  ";
        message = message + 'email must be like someone@emailserver.com';
    }
    return message;
}

module.exports = {
	validator
}
