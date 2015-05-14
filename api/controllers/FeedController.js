/**
 * FeedController
 *
 * @description :: Server-side logic for managing feeds
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
    new: function (req, res) {
        return res.send("Hi there I am feed manager in charge of creating a new feed!");
    },
    edit: function (req, res) {
        return res.send("Hi there I am feed manager in charge of editing a pre-existing feed!");
    }
};

