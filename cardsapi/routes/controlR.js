var express = require('express');
var control_router = express.Router();
var bodyParser = require('body-parser');

control_router.use(bodyParser.json());
control_router.route('/')
    .all(
        function(req, res, next)
        {
            next();
        }
    )
    .post(
        function(req, res, next)
        {

            next();
        }
    )
    .all()


module.exports = control_router;
