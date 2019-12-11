'use strict'

function validatorGeneric(courseUser){
    let message = [];
    if(courseUser.id_course.length < 15){
        message.push('id_couser must be more than 15 characters');
    }
    if(courseUser.id_user.length == 6){
        message.push('id_user must be 7 characters');
    }
    var regexNumbers = /^\d+$/;
    if(!regexNumbers.test(courseUser.id_user)){
        message.push('id_user must be numbers');
    }
    return message;
}

function validatorUndefined(courseUser){
    let message = [];
    if(courseUser.id_course == undefined){
        message.push('id_course is required');
    }
    if(courseUser.id_user == undefined){
        message.push('id_user is required');
    }
    return message;
}

module.exports = {
    validatorGeneric,
    validatorUndefined
}
