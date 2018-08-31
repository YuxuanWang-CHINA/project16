var express = require('express');
var app = express.Router();

var control_route = require('./routes/controlR');
app.use('/control', control_route);

module.exports = app;