var express = require('express');
var user_router = express.Router();
var bodyParser = require('body-parser');

var Rollbar = require('rollbar');
var rollbar = new Rollbar('2d36ebca20e64bb2beed55bc7a20995c');

var User_d = require('../database/userD');
var User_doing = new User_d();

var status = 0;
var perro = null;

user_router.use(bodyParser.json());
user_router.route('/')
    .all(
        function(req, res, next)
        {
            status = 0;
            perro = null;
            next();
        }
    )
    .get(
        function(req, res, next)
        {
            User_doing.userGet(
                function(docs)
                {
                    res.set('Connection', 'close');
                    res.json(docs);
                    next();
                },
                function(erro)
                {
                    allEcallback(erro, next);
                }
            );
        }
    )
    .post(
        function(req, res, next)
        {
            var Password_hash = require('../something/passwordST');
            Password_hash.createPassword(
                req.body.password, 
                function(hash)
                {
                    req.body.password = hash;
                    next();
                },
                function(erro)
                {
                    allEcallback(erro, next);
                }
            );
        }
    )
    .post(
        function(req, res, next)
        {
            User_doing.userPost(
                req.body,
                function()
                {
                    res.json({status: 0});
                    next();
                },
                function(erro)
                {
                    allEcallback(erro, next);
                }
            );
        }
    )
    .delete(
        function(req, res, next)
        {
            User_doing.userDelete(req.body,
                function()
                {
                    res.json({status: 0});
                    next();
                },
                function(erro)
                {
                    allEcallback(erro, next);
                }
            )
        }
    )
    .all(
        function(req, res)
        {
            if(status == 1)
            {
                res.json({status: 1, errors: perro});
            }
        }
    );

function allEcallback(erro, next)
{
    rollbar.log(erro);
    console.log(erro);
    status = 1;
    perro = erro;
    next();
}

module.exports = user_router;