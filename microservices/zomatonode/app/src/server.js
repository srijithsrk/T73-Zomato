var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser= require('body-parser');
var session = require('express-session');
var passport = require('passport');
var facebook = require('passport-facebook');

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

app.post('/login', function (req, res) {
    var username = req.body[0];
    var password = req.body[1];


})