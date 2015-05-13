/**
 * Model representing a Client in OAuth.
 */

// var util = require('util');

/*
 CREATE TABLE OAuthClient (
     clientId uuid PRIMARY KEY,
     secret varchar,
     name varchar
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
            primaryKey: true
        },
        secret: {
            type: 'STRING',
            required: true
        },
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