'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = schema({
    username: String,
    password: String,
    mail: String,
    name: String,
    description: String,
    image: String
});

module.exports = mongoose.model('User', userSchema);