'use strict'

var Validator = require('validator');

var User = require('../models/users');

var controller = {

    probando: (req, res) => {
        return res.status(200).send({
            curso: 'Master bro',
            autor: 'El menda',
            url: 'Adrianelguapo.es'
        });
    },

    test: (req, res) => {

        return res.status(200).send({
            message: 'Soy la accion test de mi controlador de usuarios'
        });
    },

    register: (req, res) => {
        //Recoger parametros por post
        var params = req.body;
        console.log(params);

        //Validar datos(Validator)
        try {
            var validate_user = !Validator.isEmpty(params.username);
            var validate_password = !Validator.isEmpty(params.password);
            var validate_mail = !Validator.isEmpty(params.mail);
            var validate_name = !Validator.isEmpty(params.name);

        } catch (err) {
            return res.status(200).json({
                status: 'error',
                message: 'Faltan datos por enviar'
            });
        }
        if (validate_user && validate_password && validate_mail && validate_name) {

            //Comprobar repeticion de datos
            var userCheck = params.username;
            var mailCheck = params.mail;
            User.findOne({
                "$or": [
                    { username: userCheck },
                    { mail: mailCheck }
                ]
            }, (err, target) => {

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
                user.password = params.password;
                user.mail = params.mail;
                user.name = params.name;
                user.description = params.description;
                user.image = null;

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

    }

} //end controller

module.exports = controller;