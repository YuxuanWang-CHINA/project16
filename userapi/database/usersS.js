var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var users_schema = new Schema(
    {
        username: String,
        password: String
    },
    {
        versionKey: false
    }
);
var Users_model = mongoose.model('users', users_schema);
module.exports = Users_model;