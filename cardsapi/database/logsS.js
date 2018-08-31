var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var Logs_schema = new Schema(
    {
        id: Number,
        log: String,
        username: String,
        time: Date,
        cardtype: String

    },
    {
        collation: 'logs',
        versionKey: false
    }
);
var Logs_model = mongoose.model('logs', Logs_schema);
module.exports = Logs_model;