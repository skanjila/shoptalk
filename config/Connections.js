/**
 * Created by skanjila on 4/30/15.
 */
module.exports.connections = {

    shoptalk-cassandra-connection: {

    module        : 'sails-cassandra',

        // typical sails/waterline options (see comment below)
        user          : 'username',
        password      : 'password',

        // cassandra driver options
        contactPoints : [ '127.0.0.1' ],
        keyspace      : 'shoptalk',
...
}
};