/**
 * HTTP Server Settings
 * (sails.config.http)
 *
 * Configuration for the underlying HTTP server in Sails.
 * Only applies to HTTP requests (not WebSockets)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.http.html
 */

var oauth2orize = require('oauth2orize'),
    passport = require('passport'),
    login = require('connect-ensure-login'),
    bcrypt = require('bcrypt'),
    trustedClientPolicy = require('../api/policies/isTrustedClient.js');

// Create OAuth 2.0 server (should be on a different port)
var server = oauth2orize.createServer();

server.serializeClient(function (client, done) {
    return done(null, client.id);
});

server.deserializeClient(function (id, done) {
    Client.findOne(id, function (err, client) {
        if (err) {
            return done(err);
        }
        return done(null, client);
    });
});

// Exchange username & password for access token.
server.exchange(oauth2orize.exchange.password(function (client, username, password, scope, done) {
    User.findOne({phone: username}, function (err, user) {
        if (err) {
            return done(err);
        }
        if (!user) {
            return done(null, false);
        }

        var pwdCompare = bcrypt.compareSync(password, user.password);
        if (!pwdCompare) {
            return done(null, false);
        }

        // Remove Refresh and Access tokens and create new ones
        RefreshToken.destroy({userId: user.id, clientId: client.id}, function (err) {
            if (err) {
                return done(err);
            } else {
                AccessToken.destroy({userId: user.id, clientId: client.id}, function (err) {
                    if (err) {
                        return done(err);
                    } else {
                        RefreshToken.create({userId: user.id, clientId: client.id}, function (err, refreshToken) {
                            if (err) {
                                return done(err);
                            } else {
                                AccessToken.create({userId: user.id, clientId: client.id}, function (err, accessToken) {
                                    if (err) {
                                        return done(err);
                                    } else {
                                        done(null, accessToken.code, refreshToken.code, {'expires_in': sails.config.oauth.tokenLife});
                                    }
                                });
                            }
                        });
                    }
                });
            }
        });
    });
}));

// Exchange refreshToken for access token.
server.exchange(oauth2orize.exchange.refreshToken(function (client, refreshToken, scope, done) {

    RefreshToken.findOne({code: refreshToken}, function (err, token) {

        if (err) {
            return done(err);
        }
        if (!token) {
            return done(null, false);
        }
        if (!token) {
            return done(null, false);
        }

        User.findOne({id: token.userId}, function (err, user) {

            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false);
            }

            // TODO - refactor this into a new method as this is similar to the one in oauth2orize.exchange.password
            // Remove Refresh and Access tokens and create new ones
            RefreshToken.destroy({userId: user.id, clientId: client.id}, function (err) {
                if (err) {
                    return done(err);
                } else {
                    AccessToken.destroy({userId: user.id, clientId: client.id}, function (err) {
                        if (err) {
                            return done(err);
                        } else {
                            RefreshToken.create({userId: user.id, clientId: client.id}, function (err, refreshToken) {
                                if (err) {
                                    return done(err);
                                } else {
                                    AccessToken.create({userId: user.id, clientId: client.id
                                    }, function (err, accessToken) {
                                        if (err) {
                                            return done(err);
                                        } else {
                                            done(null, accessToken.token, refreshToken.token, {'expires_in': sails.config.oauth.tokenLife});
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        });
    });
}));

module.exports = {
    http: {
        customMiddleware: function (app) {

            // Initialize passport
            app.use(passport.initialize());
            app.use(passport.session());

            /***** OAuth authorize endPoints *****/

            app.post('/oauth/authorize/decision',
                login.ensureLoggedIn(),
                server.decision());

            /***** OAuth token endPoint *****/
            app.post('/oauth/token',
                trustedClientPolicy,
                passport.authenticate(['basic', 'oauth2-client-password'], {session: false}),
                server.token(),
                server.errorHandler()
            );
        }
    }
};