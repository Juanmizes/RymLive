'use strict'

var express = require('express');
var userController = require('../controllers/users');
const multer = require('multer');
const path = require('path');
const uploadImages = multer({dest: path.join(__dirname, 'public/upload/temp/imageUser')}).single('image');
const uploadSongs = multer({dest: path.join(__dirname, 'public/upload/temp/songsUser')}).single('song');
var router = express.Router();


//Rutas para usuarios
router.post('/register', userController.register);
router.post('/login', userController.login);
router.put('/profile/update',userController.tokenMiddleware, userController.updateProfile);
router.get('/profile',userController.tokenMiddleware,userController.getOwnUser);
router.get('/profile/user/:id', userController.getUser);
router.put('/profile/updateImage',userController.tokenMiddleware, uploadImages ,userController.uploadImage);
router.get('/getImage/:image', userController.tokenMiddleware, userController.getImage);
router.post('/uploadSong',userController.tokenMiddleware, uploadSongs ,userController.uploadSong);
router.get('/getSong/:song', userController.tokenMiddleware, userController.getSong);


module.exports = router;