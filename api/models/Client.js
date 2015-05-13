/**
 * Model representing a Client in OAuth.
 */

/*
 CREATE TABLE Client (
     id uuid PRIMARY KEY,
     secret text,
     name text
 );
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