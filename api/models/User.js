/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

/**
 CREATE TABLE User (
     phone varchar PRIMARY KEY,
     id uuid,
     password varchar,
     name varchar,
     dob timestamp,
     gender varchar
 );

 CREATE INDEX user_id ON User (id);
 */

var bcrypt = require('bcrypt');

module.exports = {
    autoCreatedAt: false,
    autoUpdatedAt: false,
    autoPK: false,
    attributes: {
        phone: {
            type: 'STRING',
            primaryKey: true
        },
        // future-proof by having a synthetic id just in case..
        id: {
            type: 'STRING',
            required: true
        },
        password: {
            type: 'STRING',
            required: true
        },
        name: {
            type: 'STRING',
            required: true
        }/*,
        dob: {
            type: 'DATE',
            required: true
        },
        gender: {
            type: 'STRING',
            required: true
        } */,
        // Override toJSON method to remove password from API
        toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }
    },

    beforeValidate: function(values, next){
        values.id = UUIDService.uuid();
        next();
    },

    beforeCreate: function(values, next){
        bcrypt.hash(values.password, 10, function(err, hash) {
            if(err) return next(err);
            values.password = hash;
            next();
        });
    }
};