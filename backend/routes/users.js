'use strict'

var express = require('express');
var userController = require('../controllers/users');
//const multer = require('multer');
//var uploadImages = multer({dest: path.join(__dirname, 'public/img/upload/temp')}).single('image');
var router = express.Router();


//Rutas para usuarios
router.post('/register', userController.register);
router.post('/login', userController.login);
router.put('/profile/update',userController.tokenMiddleware, userController.updateProfile);
router.get('/profile',userController.tokenMiddleware,userController.getOwnUser);
router.get('/profile/user/:id', userController.getUser);
//router.put('/profile/updateImage',userController.tokenMiddleware, uploadImages ,userController.uploadImage);
//router.get('/getImage/:image', userController.getImage);


module.exports = router;