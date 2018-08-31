var express = require('express');
var app = express();
var user_route = require('./userapi/index');
var card_route = require('./cardsapi/index');

app.use('/user', user_route);
app.use('/card', card_route);

app.listen(3000);