const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/AuthController')

/*router.get('/', (req, res) => {
    res.json({
        ok: true
    })
});*/

router.post(
    '/',
    [
        check('email', 'El email es obligarorio').isEmail(),
        check('password', 'El debe ser mayor a 6 caracteres').isLength({ min: 6 })
    ],
    loginUsuario);

router.post(
    '/new', 
    [
        check('name', 'El nombre es obligarorio').not().isEmpty(),
        check('email', 'El email es obligarorio').isEmail(),
        check('password', 'El debe ser mayor a 6 caracteres').isLength({ min: 6 })
    ],
    crearUsuario);

router.get('/renew', revalidarToken);

module.exports = router;