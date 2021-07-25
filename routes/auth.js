const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/AuthController')

const router = Router();

/*router.get('/', (req, res) => {
    res.json({
        ok: true
    })
});*/

router.post(
    '/',
    [
        check('email', 'El email es obligarorio').isEmail(),
        check('password', 'El debe ser mayor a 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    loginUsuario);

router.post(
    '/new', 
    [
        check('name', 'El nombre es obligarorio').not().isEmpty(),
        check('email', 'El email es obligarorio').isEmail(),
        check('password', 'El debe ser mayor a 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    crearUsuario);

router.get('/renew', revalidarToken);

module.exports = router;