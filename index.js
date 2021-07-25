const express = require('express');
require('dotenv').config();

const app = express();

// console.log(prosses.env);

app.use( express.static('public' ));
app.use('/api/auth', require('./routes/auth'));

/*app.get('/', (req, res) => {
    res.json({
        ok: true
    })
});*/

app.listen( process.env.PORT, () => {
    console.log( `Servidor corriendo en puerto ${process.env.PORT}` );
});