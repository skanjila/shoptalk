/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

    // Create a user
    User.findOne({"phone":"123-456-7890"}, function(err, user){
        if(!user){
            User.create({"id":"demo", "password":"demo", "phone":"123-456-7890", "name": "demo"}).exec(
                function(err,user){
                    console.log("Default user created");
                    console.log("- username: 123-456-7890");
                    console.log("- password: password");
                });
        } else {
            console.log('Default user already exists');
            console.log("- username: 123-456-7890");
            console.log("- password: password");
        }
    });


    // Create a sample client
    OAuthClient.findOne({"name": "client"}, function(err, client){
        if(err){
            console.log(err.message);
        } else {
            if(!client){
                OAuthClient.create({"name" : "client", "secret": "secret"}).exec(
                    function(err, client){
                        if(err){
                            console.log(err);
                        } else {
                            console.log("client created");
                            console.log("- client_id: " + client.clientId);
                            console.log("- client_secret: " + client.secret);
                        }
                });
            } else {
                console.log('client already exists');
                console.log("- client_id: " + client.clientId);
                console.log("- client_secret: " + client.secret);
            }
        }
    });

    // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
