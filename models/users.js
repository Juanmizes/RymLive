'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = schema({
    username: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: false
    },
    image: {
        type: String,
        require: false
    },
    createDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', userSchema);