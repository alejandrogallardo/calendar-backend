const { Router } = require('express');
const router = Router();
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/AuthController')

/*router.get('/', (req, res) => {
    res.json({
        ok: true
    })
});*/

router.post('/', loginUsuario);

router.post('/new', crearUsuario);

router.get('/renew', revalidarToken);

module.exports = router;