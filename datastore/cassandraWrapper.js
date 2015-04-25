var assert=require('assert');
var cassandra = require('cassandra-driver');
var client = new cassandra.Client({contactPoints: ['127.0.0.1'], keyspace: 'shoptalk'});
var query = 'SELECT * from shoptalk_feed';
client.execute(query, function(err, result) {
    assert.ifError(err);
    var shoptalk_res=result.rows[0]
    console.log('got shoptalk results= ' + shoptalk_res.description);
});