/**
 * Access Token to be used for OAuth.
 */

/*
 CREATE TABLE AccessToken (
     code uuid,
     userId uuid,
     clientId uuid,
     scope text,
     createdAt timestamp,
     PRIMARY KEY (userId, clientId)
 );

 CREATE INDEX accesstoken_code ON AccessToken (code);
*/

module.exports = {
    autoUpdatedAt: false,
    autoPK: false,
    attributes	: {
        code: {
            type: 'STRING',
            required: true/*,
             primaryKey: true */
        },
        clientId: {
            type: 'STRING',
            required: true
        },
        userId: {
            type: 'STRING',
            required: true
        },
        scope: {
            type: 'STRING',
            required: true
        }
    },

    beforeValidate: function(values, next){
        values.token = UUIDService.uuid();
        next();
    }
};