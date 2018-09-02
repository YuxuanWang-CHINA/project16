var express = require('express');
var app = express();
var user_route = require('./userapi/index');
var card_route = require('./cardsapi/index');

var Rollbar = require('rollbar');
var rollbar = new Rollbar('2d36ebca20e64bb2beed55bc7a20995c');


app.use('/user', user_route);
app.use('/card', card_route);

app.use(rollbar.errorHandler());

app.listen(3000);