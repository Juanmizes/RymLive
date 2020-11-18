'use strict'

var mongoose = require ('mongoose');
const url = 'mongodb://localhost:27017/api_rest_blog';
var app = require('./app');
var port = 3900;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect(url, { useNewUrlParser: true})
        .then(() => {
            console.log('La conexion a la base de datos se ha realizado correctamente');

            //Crear servidor y poner a escuchar peticiones http
            app.listen(port, ()=> {
                console.log('Servidor corriendo en el puerto 3900');

            });

        });