'use strict'

function validatorGeneric(user){
    let message = [];
    if(user._id.length > 7 || user._id.length < 7){
        //throw new Error('_id must be with 7 characters');
        message.push('_id must be with 7 characters');
    }
    var regexNumbers = /^\d+$/;
    if(!regexNumbers.test(user._id)){
        message.push('_id must be numbers');
    }
    if(user.nick_name.length < 3 || user.nick_name.length > 10){
        message.push('nick_name must be between 3 and 10 characters');
    }
    if(user.password.length < 6 || user.password.length > 10){
        message.push('password must be between 5 and 7 characters');
    }
    if(user.name.length < 3 || user.name.length > 24){
        message.push('name must be between 3 and 24 characters');
    }
    if(user.last_name.length < 3 || user.last_name.length > 24){
        message.push('last_name must be between 3 and 24 characters');
    }
    if(user.career.length < 3 || user.career.length > 24){
        message.push('career must be between 3 and 24 characters');
    }
    if(user.email.length < 5 || user.email.length > 32){
        message.push('email must be between 5 and 32 characters');
    }
    if(user.type.length < 3 || user.type.length > 10){
        message.push('type must be between 3 and 10 characters');
    }
    let regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regexEmail.test(user.email)){
        message.push('email must be like someone@emailserver.com');
    }
    return message;
}

function validatorUndefined(user){
    let message = [];
    if(typeof user._id == 'undefined'){
        message.push('_id is required');
    }
    if(user.nick_name == undefined){
        message.push('nick_name is required');
    }
    if(user.password == undefined){
        message.push('password is required');
    }
    if(user.last_name == undefined){
        message.push('last_name is required');
    }
    if(user.name == undefined){
        message.push('name is required');
    }
    if(user.career == undefined){
        message.push('career is required');
    }
    if(user.email == undefined){
        message.push('email is required');
    }
    if(user.type == undefined){
        message.push('type is required');
    }
    return message;
}

module.exports = {
    validatorGeneric,
    validatorUndefined
}
