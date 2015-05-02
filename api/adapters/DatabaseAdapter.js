var assert=require('assert');
var cassandra = require('cassandra-driver');
var client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'shoptalk'});


var query = 'SELECT * from shoptalk_feed';
client.execute("SELECT * from shoptalk_feed", function (err, result) {
    if (!err){
        if ( result.rows.length > 0 ) {
            var stuff = result.rows[0];
            console.log("id = %s, description = %s", stuff.id, stuff.description);
        } else {
            console.log("No results");
        }
    }
});
