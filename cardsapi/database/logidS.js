var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Logid_schema = new Schema(
    {
        idnow: Number
    },
    {
        collection: 'logid',
        versionKey: false
    }
);

var Logid_model = mongoose.model('logid', Logid_schema);
//module.exports = Logid_model;

var database_set = require('../../config/database_config');
mongoose.connect(database_set.dburl,{ useNewUrlParser: true });
var db = mongoose.connection;

Logid_model.find().exec().then(
    function(doc){console.log(doc); db.close()},
    function(err){console.log(err);}
);
