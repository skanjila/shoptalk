/**
 * Created by skanjila on 4/25/15.
 * This is the main controller for shoptalk which:
 * 1) takes in requests and parses them
 * 2) communicates with the data store
 * 3) performs transformations after extracting contents from multiple feeds
 * 4) additional business logic related to feed validation
 */
var dataStore = require('../datastore/cassandraWrapper');
var feedProc = require('./processFeed');

var feed=feedProc('http://localhost:3000');
console.log(feed.description);


