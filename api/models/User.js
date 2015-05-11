/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

    attributes: {
        id: {
            type: 'STRING',
            primaryKey: true
        },
        hashedPassword: {
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
        } */,
        // Override toJSON method to remove password from API
        toJSON: function() {
            var obj = this.toObject();
            delete obj.password;
            return obj;
        }
    },

    beforeCreate: function(values, next){
        bcrypt.hash(values.password, 10, function(err, hash) {
            if(err) return next(err);
            values.hashedPassword = hash;
            delete values.password;
            next();
        });
    }
};