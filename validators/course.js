'use strict'

function validatorGeneric(course){
    let message = [];
    if(course.name.length < 3 || course.name.length > 24){
        message.push('name must be between 3 and 24 characters');
    }
    return message;
}

function validatorUndefined(course){
    let message = [];
    if(course.name == undefined){
        message.push('name is required');
    }
    return message;
}

module.exports = {
    validatorGeneric,
    validatorUndefined
}
