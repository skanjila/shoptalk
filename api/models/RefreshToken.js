/**
 * Refresh Token to be used for OAuth.
 */

module.exports = {

    // TODO - Refresh tokens are retrieved using userId and clientId, so make them primary keys
    // TODO - Secondary index on token to enable quick retrieval
    attributes: {
        userId: {
            type: 'STRING',
            primaryKey: true
        },
        clientId: {
            type: 'STRING',
            primaryKey: true
        },
        token: {
            type: 'STRING',
            required: true
        }
    },

    beforeCreate: function(values, next){
        values.token = UUIDService.uuid();
        next();
    }
};