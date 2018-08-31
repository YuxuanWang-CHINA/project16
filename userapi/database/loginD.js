var mongoose = require('mongoose');
var database_set = require('../../config/database_config');
var Users_model = require('./usersS');

function LoginDo()
{
    this.loginCheck = function(requ, rcallback)
    {
        mongoose.connect(database_set.dburl,{ useNewUrlParser: true });
        var db = mongoose.connection;

        Users_model.findOne({ username: requ.username }).select('password').exec().then(
            function(docs)
            {
                rcallback(docs);
                db.close();
            },
            function(erro)
            {
                console.log(erro);
            }
        );
    }
};

module.exports = LoginDo;