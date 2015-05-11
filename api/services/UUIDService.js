/**
 * Service to generate UUIDs.
 */

var nodeUuid = require('node-uuid');

exports.uuid = function() {
    return nodeUuid.v4();
};