'use strict'

function validatorGeneric(score){
    let message = [];
    if(score.id_module.length < 15){
        message.push('id_module must be more than 15 characters');
    }
    if(score.id_user.length != 7){
        message.push('id_user must be 7 characters');
    }
    var regexNumbers = /^\d+$/;
    if(!regexNumbers.test(score.id_user)){
        message.push('id_user must be numbers');
    }
	if(score.value.length > 3 || score.value.length < 1){
        //throw new Error('_id must be with 7 characters');
        message.push('value must be with 1 and 100');
    }
    if(!regexNumbers.test(score.value)){
        message.push('value must be numbers');
    }
    return message;
}

function validatorUndefined(score){
    let message = [];
    if(score.id_module == undefined){
        message.push('id_module is required');
    }
    if(score.id_user == undefined){
        message.push('id_user is required');
    }
	if(score.value == undefined){
        message.push('value is required');
    }
    return message;
}

module.exports = {
    validatorGeneric,
    validatorUndefined
}
