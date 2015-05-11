/**
 * Access Token to be used for OAuth.
 */

module.exports = {

    attributes	: {
        token: {
            type: 'STRING',
            primaryKey: true
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

    beforeCreate: function(values, next){
        values.token = UUIDService.uuid();
        next();
    }
};