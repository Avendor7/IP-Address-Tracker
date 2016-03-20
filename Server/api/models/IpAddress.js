/**
 * IpAddress.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
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
