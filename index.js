const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');

const app = express();

dbConnection();
// console.log(prosses.env);

app.use( express.static('public' ));

// lectura y parseo del body
app.use( express.json() );

app.use('/api/auth', require('./routes/auth'));

/*app.get('/', (req, res) => {
    res.json({
        ok: true
    })
});*/

app.listen( process.env.PORT, () => {
    console.log( `Servidor corriendo en puerto ${process.env.PORT}` );
});