/**
 * Model representing a Client in OAuth.
 */

/*
 CREATE TABLE Client (
     id uuid,
     secret text,
     name text,
     PRIMARY KEY (id, secret)
 )
 */
module.exports = {
    attributes: {
        id: {
            type: 'STRING',
            required: true/*,
            primaryKey: true */
        },
        secret: 'STRING',
        name: {
            type: 'STRING',
            required: true
        }
    },

    beforeValidate: function(values, next){
        values.id = UUIDService.uuid();
        next();
    }
};