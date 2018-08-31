var mongoose = require('mongoose');
var database_set = require('../../config/database_config');
var Users_model = require('./usersS');

function startCon(rcallback, ecallback)
{
    mongoose.connect(database_set.dburl,{ useNewUrlParser: true }).then(rcallback,ecallback);
};

function UserDo()
{
    this.userGet = function(rcallback, ecallback)
    {
        startCon(
            function()
            {
                var db = mongoose.connection
                Users_model.find().exec().then(
                    function (docs)
                    {
                        rcallback(docs);
                        db.close();
                    },
                    function(erro)
                    {
                        db.close();
                        ecallback(erro);
                    }
                );
            },
            function(erro)
            {
                ecallback(erro);
            }
        )
    };

    this.userPost = function(requ, rcallback, ecallback)
    {
        startCon(
            function()
            {
                var db = mongoose.connection;
                var Insert_into = new Users_model({ username: requ.username, password: requ.password });
                Insert_into.save().then(
                    function()
                    {
                        rcallback();
                        db.close();
                    },
                    function(erro)
                    {
                        db.close();
                        ecallback(erro);
                    }
                );
            },
            function(erro)
            {
                ecallback(erro);
            }
        )
    };

    this.userDelete = function(requ, rcallback, ecallback)
    {
        startCon(
            function()
            {
                var db = mongoose.connection;
                Users_model.deleteOne({ username: requ.username }).then(
                    function()
                    {
                        rcallback();
                        db.close();
                    },
                    function(erro)
                    {
                        db.close();
                        ecallback(erro);
                    }
                )
            },
            function(erro)
            {
                ecallback(erro);
            }
        )
    }
};

module.exports = UserDo;