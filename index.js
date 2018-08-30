var express = require('express');
var app = express();
var user_route = require('./userapi/index');

app.use('/user', user_route);
app.listen(3000);