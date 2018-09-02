var express = require('express');
var login_router = express.Router();
var bodyParser = require('body-parser');
var Login_d = require('../database/loginD');
var Login_doing = new Login_d();

login_router.use(bodyParser.json());
login_router.route('/')
    .post(
        function(req, res)
        {
            var inputPasswords = req.body.password;
            Login_doing.loginCheck(
                req.body,
                function(docs)
                {
                    var phash = docs.password;
                    var Password_hash = require('../something/passwordST');
                    Password_hash.checkPassword(
                        inputPasswords,
                        phash,
                        function(results)
                        {
                            //console.log(results);
                            if(results == true)
                            {
                                res.send({status: 0,loginpass: 0});
                            }else{
                                res.send({status: 0,loginpass: 1});
                            }
                        },
                        function(erro)
                        {
                            res.send({status: 1,errors: erro});
                        }
                    );
                },
                function(erro)
                {
                    res.send({status: 1,errors: erro});
                }
            )
        }
    );

module.exports = login_router;