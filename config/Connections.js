/**
 * Created by skanjila on 4/30/15.
 */
module.exports.connections = {

    shoptalkcassandraconnection: {

        module        : 'sails-cassandra',

        // typical sails/waterline options (see comment below)
        user          : 'cassandra',
        password      : 'cassandra',

        // cassandra driver options
        contactPoints : [ 'ec2-52-24-107-37.us-west-2.compute.amazonaws.com' ],
        keyspace      : 'shoptalk'
    }
};