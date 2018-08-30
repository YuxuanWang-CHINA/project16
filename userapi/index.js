var express = require('express');
var app = express.Router();

var user_route = require('./routes/userR');
app.use('/control', user_route);
var login_route = require('./routes/loginR');
app.use('/login', login_route);

module.exports = app;