'use strict'

const Validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../configuraciones.json');
const fs = require('fs');
const path = require('path');
var User = require('../models/users');

var controller = {

    register: async (req, res) => {
        //Recoger parametros por post
        var params = req.body;
        console.log(params);

        //Validar datos(Validator)
        try {
            var validate_user = !Validator.isEmpty(params.username);
            var validate_password = !Validator.isEmpty(params.password);
            var validate_email = !Validator.isEmpty(params.email);
            var validate_name = !Validator.isEmpty(params.name);

        } catch (err) {
            return res.status(200).json({
                status: 'error',
                message: 'Faltan datos por enviar'
            });
        }
        if (validate_user && validate_password && validate_email && validate_name) {

            //Comprobar repeticion de datos
            var userCheck = params.username;
            var emailCheck = params.email;
            User.findOne({
                "$or": [
                    { username: userCheck },
                    { email: emailCheck }
                ]
            }, async (err, target) => {

                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error del servidor, no se ha podido crear el usuario'
                    });
                }
                if (target) {
                    return res.status(200).send({
                        status: 'error',
                        message: 'El usuario o el correo electronico ya esta en uso'
                    });
                }
                //Crear el objeto a guardar
                var user = new User();

                //Asignar valores
                user.username = params.username;
                user.email = params.email;
                user.name = params.name;
                user.description = params.description;
                user.image = null;

                //Cifrado de contraseña
                const salt = await bcrypt.genSalt(10);
                const pwCifrado = await bcrypt.hash(params.password, salt);
                user.password = pwCifrado;

                //Save
                user.save((err, userStored) => {
                    if (err || !userStored) {
                        return res.status(404).send({
                            status: 'error',
                            message: 'El usuario no se ha guardado'
                        });
                    }
                    //Devolver respuesta
                    return res.status(200).send({
                        status: 'success',
                        user: userStored
                    });
                });
            });

        }

    },//end register
    login: async (req, res) => {
        const { email, password } = req.body;
        console.log(req.body);
        const user = await User.findOne({ email });
        if (!user) return res.status(401).send('El email o la contraseña no existe');


        if (!await bcrypt.compare(password, user.password)) return res.status(401).send('El email o la contraseña no existe');

        const token = jwt.sign({ _id: user._id }, secretKey, { expiresIn: '2 days' });

        return res.status(200).send({
            status: 'success',
            token
        });
    },//end login

    tokenMiddleware: async (req, res, next) => {
        try {
            if (!req.headers.auth) {
                return res.status(401).send({
                    status: 'error',
                    message: 'No tienes autorizacion'
                });
            }
            let token = req.headers.auth.split(' ')[1];
            if (token === 'null') {
                return res.status(401).send({
                    status: 'error',
                    message: 'No tienes autorizacion'
                });
            }

            const payload = await jwt.verify(token, secretKey);
            if (!payload) {
                return res.status(401).send({
                    status: 'error',
                    message: 'No tienes autorizacion'
                });
            }
            const exist = await User.findById({ _id: payload._id });
            if (!exist) {
                return res.status(401).send({
                    status: 'error',
                    message: 'No tienes autorizacion'
                });
            }
            req.userId = payload._id;
            next();
        } catch (e) {
            //console.log(e)
            return res.status(401).send({
                status: 'error',
                message: 'No tienes autorizacion'
            });
        }
    },//end tokenMiddleware
    updateProfile: async (req, res) => {
        const params = req.body;
        const userId = req.userId;

        try {
            const updateUser = await User.findByIdAndUpdate({ _id: userId }, { description: params.description }, { new: true });
            return res.status(500).send({
                status: 'success',
                user: updateUser
            })
        } catch (err) {
            return res.status(500).send({
                status: 'error',
                message: 'Error al actualizar'
            });
        }

    },//end updateProfile
    getOwnUser: async (req, res) => {
        const userId = req.userId;
        try {
            const ownUser = await User.findById({ _id: userId });
            if (!ownUser) {
                return res.status(404).send({
                    status: 'error',
                    message: 'Este usuario no existe'
                });
            }
            return res.status(200).send({
                status: 'success',
                user: ownUser
            });
        } catch (err) {
            return res.status(500).send({
                status: 'error',
                message: 'Error al devolver los datos'
            });
        }
    },//end getOwnUser
    getUser: async (req, res) => {
        const userId = req.params.id;
        try {
            const targetUser = await User.findById({ _id: userId });
            if (!targetUser) {
                return res.status(404).send({
                    status: 'error',
                    message: 'Este usuario no existe'
                });
            }
            return res.status(200).send({
                user: targetUser
            });
        } catch (err) {
            return res.status(500).send({
                status: 'error',
                message: 'Error al devolver los datos'
            });
        }
    },//end getUser
    uploadImage: async (req, res) => {
       
        //recoger fichero peticion 
        let file_name = 'Imagen no subida...';
        //comprobamos que tiene algo
        
       
    }, //end updateImage
    getImage: (req, res) => {
        const file = req.params.image;

        var path_file = './upload/usersImage/' + file;

        const exist = fs.existsSync(path_file);

        if (exist) {

            return res.sendFile(path.resolve(path_file));

        } else {
            return res.status(404).json({
                status: 'error',
                message: 'La imagen no existe'
            });

        }
    }//end getImage

} //end controller

module.exports = controller;