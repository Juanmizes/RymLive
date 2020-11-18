'use strict'

var express = require('express');
var userController = require('../controllers/users');

var router = express.Router();

router.post('/probando', userController.probando);
router.get('/test-controlador', userController.test);

module.exports = router;