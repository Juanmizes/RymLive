'use strict'


// cargar modulos de node para cargar el servidor
var express = require('express');


// Ejecutar express(http)
var app = express();


// Cargar ficheros rutas
var user_routes = require('./routes/users');

// Middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// CORS (permitir peticiones desde el front end)

// Añadir prefijos a rutas/ Cargar rutas
app.use('/', user_routes);


//Ruta o metodo prueba
/*app.get('/probando', (req, res)=>{
    return res.status(200).send({
        curso: 'Master bro',
        autor: 'El menda',
        url : 'Adrianelguapo.es'
    });
});
*/
// Exportar modulo (fichero actual)
module.exports = app;