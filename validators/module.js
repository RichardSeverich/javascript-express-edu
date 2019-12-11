'use strict'

function validatorGeneric(module){
    let message = [];
    if(module.name.length < 3 || module.name.length > 24){
        message.push('name must be between 3 and 24 characters');
    }
    return message;
}

function validatorUndefined(module){
    let message = [];
    if(module.name == undefined){
        message.push('name is required');
    }
    return message;
}

module.exports = {
    validatorGeneric,
    validatorUndefined
}
