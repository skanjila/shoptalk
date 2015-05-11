/**
 * Refresh Token to be used for OAuth.
 */

module.exports = {

    attributes: {
        token: {
            type: 'STRING',
            primaryKey: true
        },
        userId: {
            type: 'STRING',
            required: true
        },
        clientId: {
            type: 'STRING',
            required: true
        }
    },

    beforeCreate: function(values, next){
        values.token = UUIDService.uuid();
        next();
    }
};