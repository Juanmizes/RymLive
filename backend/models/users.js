'use strict'

var mongoose = require('mongoose');
var schema = mongoose.schema;

var userSchema = schema({
    user: String,
    password: String,
    mail: String,
    description: String,
    image: String
});

module.exports = mongoose.model('User', userSchema);