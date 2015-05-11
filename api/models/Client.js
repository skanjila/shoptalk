/**
 * Model representing a Client in OAuth.
 */

module.exports = {
    attributes: {
        clientId: {
            type: 'STRING',
            primaryKey: true
        },
        clientSecret: 'STRING',
        name: {
            type: 'STRING',
            required: true
        },
        redirectURI: {
            type: 'STRING',
            required: true
        }
    },

    beforeCreate: function(values, next){
        values.clientId = UUIDService.uuid();
        values.clientSecret = UUIDService.uuid();
        next();
    }
};