'use strict'

var mongoose = require ('mongoose');
//const url = 'mongodb://localhost:27017/RymLive';
var app = require('./app');
var port = process.env.PORT || 3900;
const { database } = require('./key');

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect(database.URI, { useNewUrlParser: true, useUnifiedTopology: true})
        .then(() => {
            console.log('La conexion a la base de datos se ha realizado correctamente');

            //Crear servidor y poner a escuchar peticiones http
            app.listen(port, ()=> {
                console.log('Servidor corriendo en el puerto 3900');

            });

        });