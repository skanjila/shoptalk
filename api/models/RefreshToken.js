/**
 * Refresh Token to be used for OAuth.
 */

/*
 CREATE TABLE RefreshToken (
     code uuid,
     clientId uuid,
     userId uuid,
     PRIMARY KEY (userId, clientId)
 )
 */

module.exports = {
    // TODO - Secondary index on code to enable quick retrieval
    autoCreatedAt: false,
    autoUpdatedAt: false,
    autoPK: false,
    attributes: {
        clientId: {
            type: 'STRING',
            required: true/*,
             primaryKey: true */
        },
        userId: {
            type: 'STRING',
            required: true/*,
             primaryKey: true */
        },
        code: {
            type: 'STRING',
            required: true
        }
    },

    beforeValidate: function(values, next){
        values.code = UUIDService.uuid();
        next();
    }
};