/**
 * SocialController
 *
 * @description :: Server-side logic for managing socials
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    index: function(req,res)
    {
        res.json({"msg":"Successful OAuth2 Authorization..."});
    }
};

