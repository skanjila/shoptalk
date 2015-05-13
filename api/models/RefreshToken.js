/**
 * Refresh Token to be used for OAuth.
 */

/*
 CREATE TABLE RefreshToken (
     code uuid,
     clientId uuid,
     userId uuid,
     PRIMARY KEY (userId, clientId)
 );

 CREATE INDEX refreshtoken_code ON RefreshToken (code);
 */

module.exports = {
    // TODO - Secondary index on code to enable quick retrieval
    autoCreatedAt: false,
    autoUpdatedAt: false,
    autoPK: false,
    attributes: {
        userId: {
            type: 'STRING',
            required: true/*,
             primaryKey: true */
        },
        clientId: {
            type: 'STRING',
            required: true/*,
             primaryKey: true */
            // Waterline doesn't allow composite primary keys, so, comment primaryKey as a temporary workaround
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