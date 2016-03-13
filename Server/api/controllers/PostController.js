/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	restricted: function (req,res){
        return res.ok("I am Authenticated");
    },
    open: function (req,res){
        return res.ok("Not Authenticated");
    },
    jwt: function (req, res){
        return res.ok("You have a JSON web token");
    }
};

