'use strict'

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var songSchema = schema({
    title: {
        type: String,
        require: true
    },
    autor: {
        type: String,
        require: false
    },
    nameFile: {
        type: String,
        require: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    views: {
        type: Number,
        require: false,
        default: 0
    },
    createDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Song', songSchema);