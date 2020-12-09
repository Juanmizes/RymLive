'use strict'


// cargar modulos de node para cargar el servidor
var express = require('express');


// Ejecutar express(http)
var api = express();


// Cargar ficheros rutas
var user_routes = require('./routes/users');

// Middlewares
api.use(express.urlencoded({extended:false}));
api.use(express.json());

// CORS (permitir peticiones desde el front end)
api.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// Añadir prefijos a rutas/ Cargar rutas
api.use('/api', user_routes);


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
module.exports = api;