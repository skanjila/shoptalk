/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes	: {
        id: {
            type: 'STRING',
            primaryKey: true
        },
        passcode: {
            type: 'STRING',
            required: true
        },
        name: {
            type: 'STRING',
            required: true
        }/*,
        phone: {
            type: 'STRING',
            required: true
        },
        dob: {
            type: 'DATE',
            required: true
        },
        gender: {
            type: 'STRING',
            required: true
        } */
    }
};