'use strict'

function validatorGeneric(user){
    const _id = user._id;
    const nick_name = user.nick_name;
    const password = user.password;
    const last_name = user.last_name;
    const name = user.name;
    const career = user.career;
    const email = user.email;
    const type = user.type;
    let message = [];
    if(_id.length > 7 || _id.length < 7){
        //throw new Error('_id must be with 7 characters');
        message.push('_id must be with 7 characters');
    }
    var regexNumbers = /^\d+$/;
    if(!regexNumbers.test(_id)){
        message.push('_id must be numbers');
    }
    if(nick_name.length < 3 || nick_name.length > 10){
        message.push('nick_name must be between 3 and 10 characters');
    }
    if(password.length < 6 || password.length > 10){
        message.push('password must be between 5 and 7 characters');
    }
    if(name.length < 3 || name.length > 24){
        message.push('name must be between 3 and 24 characters');
    }
    if(last_name.length < 3 || last_name.length > 24){
        message.push('last_name must be between 3 and 24 characters');
    }
    if(career.length < 3 || career.length > 24){
        message.push('career must be between 3 and 24 characters');
    }
    if(email.length < 5 || email.length > 32){
        message.push('email must be between 5 and 32 characters');
    }
    if(type.length < 3 || type.length > 10){
        message.push('type must be between 3 and 10 characters');
    }
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regexEmail.test(email)){
        message.push('email must be like someone@emailserver.com');
    }
    return message;
}

function validatorUndefined(user){
    const _id = user._id;
    const nick_name = user.nick_name;
    const password = user.password;
    const last_name = user.last_name;
    const name = user.name;
    const career = user.career;
    const email = user.email;
    const type = user.type;
    let message = [];
    if(typeof _id == 'undefined'){
        message.push('_id is required');
    }
    if(nick_name == undefined){
        message.push('nick_name is required');
    }
    if(password == undefined){
        message.push('password is required');
    }
    if(last_name == undefined){
        message.push('last_name is required');
    }
    if(name == undefined){
        message.push('name is required');
    }
    if(career == undefined){
        message.push('career is required');
    }
    if(email == undefined){
        message.push('email is required');
    }
    if(type == undefined){
        message.push('type is required');
    }
    return message;
}

module.exports = {
    validatorGeneric,
    validatorUndefined
}
