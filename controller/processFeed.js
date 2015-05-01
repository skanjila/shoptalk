/**
 * Created by skanjila on 4/25/15.
 */
var request = require("request")

var url = "http://localhost:3000"
request('http://www.google.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // Show the HTML for the Google homepage.
    }
});
