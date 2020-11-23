'use strict'

var express = require('express');
var userController = require('../controllers/users');

var router = express.Router();

//Rutas Prueabas
router.post('/probando', userController.probando);
router.get('/test-controlador', userController.test);

//Rutas para usuarios
router.post('/register', userController.register);


module.exports = router;