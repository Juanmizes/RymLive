'use strict'

const Validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { secretKey } = require('../configuraciones.json');
const { randomName } = require('../helpers/libs');
const fs = require('fs-extra');
const path = require('path');
var User = require('../models/users');
var Song = require('../models/songs');

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
                status: 'success',
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
        //Creamos una función para salvar la imagen
        console.log(req.file);
        const saveImage = async () => {

            //Creamos un nombre random de 20 digitos para la imagen 
            const imgUrl = randomName(20);

            //sacamos la extension de la imagen que el usuaria ha enviado    
            const ext = path.extname(req.file.originalname).toLowerCase();

            //buscamos para ver si ya hay una imagen que se llame igual
            const images = await User.find({ image: [imgUrl + ext] });

            //si hay una imagen que se llame igual volvemos a llamar a la función
            if (images.length > 0) {
                saveImage();
                return;
            } else {

                const imageTempPath = req.file.path;

                if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {        //comprobamos que sea una imagen
                    const imageTempPath = req.file.path;
                    const targetPath = path.resolve(`public/upload/usersImage/${imgUrl}${ext}`)

                    await fs.rename(imageTempPath, targetPath); //Guardamos la imagen en la carpeta upload

                    const save = await User.findByIdAndUpdate({ _id: req.userId }, { image: imgUrl + ext }); //subimos el viaje a la bbdd

                    res.json({      //respondemos al usuario que todo ha ido bien
                        status: 'success',
                        message: `Imagen guardada satisfactoriamente en el usuario: ${save._id}`
                    });

                } else {
                    await fs.unlink(imageTempPath);
                    res.status(500).json({
                        status: 'error',
                        message: 'Extensión no válida'
                    })
                }
            }
        }
        saveImage();


    }, //end updateImage
    getImage: (req, res) => {
        const file = req.params.image;

        var path_file = './public/upload/usersImage/' + file;

        const exist = fs.existsSync(path_file);

        if (exist) {

            return res.sendFile(path.resolve(path_file));

        } else {
            return res.status(404).json({
                status: 'error',
                message: 'La imagen no existe'
            });

        }
    },//end getImage


    uploadSong: async (req, res) => {

        const { title, autor } = req.body;
        if (!title && !autor) {
            return res.status(500).json({
                status: 'error',
                message: 'No has enviado todos los datos'
            })
        }
        //Creamos una función para salvar la cancion
        const saveSong = async () => {
            //Creamos un nombre random de 20 digitos para la cancion 
            const songUrl = randomName(20);
            //sacamos la extension de la cancion que el usuaria ha enviado    
            const ext = path.extname(req.file.originalname).toLowerCase();
            //buscamos para ver si ya hay una cancion que se llame igual
            const songs = await Song.find({ nameFile: [songUrl + ext] });
            //si hay una cancion que se llame igual volvemos a llamar a la función
            if (songs.length > 0) {
                saveSong();
                return;
            } else {
                console.log(req.file);
                let RepitSong = await Song.find({ title: req.body.title, autor: req.body.autor });
                if (RepitSong.length > 0) {
                    await fs.unlink(req.file.path);
                    res.status(500).json({
                        status: 'error',
                        message: 'Este autor ya posee una cancion con el mismo titulo'
                    })
                } else {
                    const songTempPath = req.file.path;

                    if (ext === '.mp3' || ext === '.wav' || ext === '.wma' || ext === '.mid') {        //comprobamos que sea una imagen
                        const songTempPath = req.file.path;
                        const targetPath = path.resolve(`public/upload/usersSong/${songUrl}${ext}`)

                        await fs.rename(songTempPath, targetPath); //Guardamos la imagen en la carpeta upload
                        const song = new Song({ title: title, autor: autor, user: req.userId, nameFile: songUrl + ext });
                        await song.save(); //subimos el viaje a la bbdd

                        res.json({      //respondemos al usuario que todo ha ido bien
                            status: 'success',
                            message: `Canción guardada satisfactoriamente en el usuario: ` + req.userId
                        });

                    } else {
                        await fs.unlink(songTempPath);
                        res.status(500).json({
                            status: 'error',
                            message: 'Extensión no válida'
                        })
                    }
                }

            }
        }
        saveSong();
    },//end uploadSong

    getSong: (req, res) => {
        const file = req.params.song;

        var path_file = './public/upload/usersSong/' + file;

        const exist = fs.existsSync(path_file);

        if (exist) {

            return res.sendFile(path.resolve(path_file));

        } else {
            return res.status(404).json({
                status: 'error',
                message: 'La canción no existe'
            });

        }
    },//end getImage
    getUserSongs: async (req, res) => {
        const userId = req.userId;
        const users = await Song.find({user: userId});
        console.log(users);
        res.status(200).json({
            status: 'success',
            song: users
        })

    },//end getUserSongs
    AddViews: async (req, res) => {
        const params = req.params;
        try {
            let songUpdate = await Song.findOne({nameFile: params.nameFile});
            let viewsUpdated = songUpdate.views + 1;
            const updateSong = await Song.findOneAndUpdate({ nameFile: params.nameFile }, { views: viewsUpdated  }, { new: true });
            return res.status(500).send({
                status: 'success',
                song: updateSong
            })
        } catch (err) {
            return res.status(500).send({
                status: 'error',
                message: 'Error al sumar una View'
            });
        }
        
    },//end AddViews
    getPopularSong: async (req,res) => {
        const songs = await Song.find().sort({views: -1}).limit(1);
        return res.status(500).send({
            status: 'success',
            song: songs
        })
    }//end getPopularSong

} //end controller

module.exports = controller;