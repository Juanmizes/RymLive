'use strict'

var controller = {

    probando:(req, res)=>{
        return res.status(200).send({
            curso: 'Master bro',
            autor: 'El menda',
            url : 'Adrianelguapo.es'
        });
    },

    test: (req, res) => {

        return res.status(200).send({
            message: 'Soy la accion test de mi controlador de usuarios'
        });
    }
} //end controller

module.exports = controller;