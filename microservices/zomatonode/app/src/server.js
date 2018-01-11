var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser= require('body-parser');
var session = require('express-session');
var passport = require('passport');
var facebook = require('passport-facebook');
var Promise = require('bluebird');
var request = require('request-promise');

var app = express();
app.set('port', 8000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));
app.get('/',function (req,res) {
    res.send("Send")
});

app.get('/input',function (req, res) {
    var endPoint = '/login';
    var inputBox = `
    <form action="${endPoint}" method="post">
    <label for="box" >User Name</label>
    <input type="text" id="box" name="textBox" placeholder="Enter Your User Name">
    <label for="pass" >Password</label>
    <input type="password" id="pass" name="passBox" placeholder="Enter Your password">
    <button type="submit">Submit</button>    
    </form>
    `;
    res.send(inputBox);

});
app.post('/login', function (req, res) {
    var username = req.body.textBox;
    var password = req.body.passBox;
    res.send(username + " " + password);
    /* request({
        method: 'POST',
        url: 'auth.bodybuilder89.hasura-app.io/v1/login',
        json: true,
        body: {
            "provider" : "username",
            "data" : {
                "username": username,
                "password": password
        }
    }}).then(function (body) {
        res.send(body);
    }).catch(function (err) {
        res.send("SOmething Went Wrong");
    }) */


});

app.listen(app.get('port'), function () {
    console.log("APP RUNNING ON " + app.get('port'));
});