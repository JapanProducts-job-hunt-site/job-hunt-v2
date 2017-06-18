/*
このファイルでデーターベースと繋げて情報のやり取りをする
 */

var express = require("express");
var app = express();
var mongodb = require('mongodb').MongoClient;
var assert = require('assert');
var bodyParser  = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
var url = 'mongodb://localhost:27017/test';


module.exports.register = function (req, res)
{
    console.log("insert");
    console.log(req.body);
    var item =
        {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        };

    mongodb.connect(url, function(err, db)
    {
        assert.equal(null, err); //check if there is error or not. If ok, continue
        db.collection('userData').insertOne(item, function(err, result)
        {
            assert.equal(null, err);
            console.log('Item inserted.');
            db.close();
            console.log(__dirname + "/user/view/myPage/myPage.html");
            res.sendFile(__dirname + "/user/view/myPage/myPage.html");
        });
    });
};



module.exports.login = function(req, res)
{
    mongodb.connect(url, function(err, db)
    {
        assert.equal(null, err); //check if there is error or not. If ok, continue
        db.collection('userData').findOne({email: req.query.email, password: req.query.password}, function(err, result)
        {
            assert.equal(null, err);

            // if there are any errors, return the error before anything else
            if(err)
            {
                console.log("Something went wrong");
            }
            // if user or password is not found, return the message
            else if(!result)
            {
                //req.flash('error', 'Username and password are incorrect');
                res.redirect('/login');
                console.log("User name not found or password is wrong.");
            }
            // all is well, return successful user
            else
            {
                /*
                 test.controller('myCtrl', function($scope)
                 {
                 $scope.firstName = result.firstName;
                 $scope.lastname = result.lastName;
                 });
                 */
                console.log(result.firstName);
                //res.json(result);
                res.sendFile(__dirname + "/user/view/myPage/myPage.html");
            }
        });
    });
}