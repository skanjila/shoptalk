/**
 * Model representing a Client in OAuth.
 */

// var util = require('util');

/*
 CREATE TABLE OAuthClient (
     clientId uuid PRIMARY KEY,
     secret text,
     name text
 );

 CREATE INDEX oauthclient_name ON OAuthClient (name);
 */
module.exports = {
    autoCreatedAt: false,
    autoUpdatedAt: false,
    autoPK: false,
    attributes: {
        clientId: {
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
        values.clientId = UUIDService.uuid();
        // console.log("*** new client: " + util.inspect(values, false, null));
        next();
    }
};