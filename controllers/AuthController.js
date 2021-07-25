const express = require('express');
// const { validationResult } = require('express-validator');

const crearUsuario = ( req, res = express.response ) => {
    
    const { name, email, password } = req.body;

    /*if (name.length < 5)
    {
        return res.status(400).json({
            ok: false,
            msg: 'El nombre debe ser mayor a 5 letras'
        });
    }*/

    /* Esto se traslado a un middlewares
    *
    const errors = validationResult( req );

    if ( !errors.isEmpty() )
    {
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        });
    }*/

    res.status(201).json({
        ok: true,
        msg: 'registro',
        name,
        email,
        password
    });

};

const loginUsuario = ( req, res = express.response ) => {

    const { email, password } = req.body;

    res.json({
        ok: true,
        msg: 'login',
        email,
        password
    })
};

const revalidarToken = (req, res = express.response ) => {
    res.json({
        ok: true,
        msg: 'renew'
    })
};

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}