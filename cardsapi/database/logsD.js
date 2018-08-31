var mongoose = require('mongoose');
var database_set = require('../../config/database_config');
var Logid_model = require('./logidS');
var Logs_model = require('./logsS');

function LogsDo()
{
    this.getIdNew = function(rcallback)
    {
        mongoose.connect(database_set.dburl,{ useNewUrlParser: true });
        var db = mongoose.connection;

        
    }
};