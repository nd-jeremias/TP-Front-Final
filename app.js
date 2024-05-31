const express = require('express');
const app = express();
const homeRoute = require('./src/routes/homeRoute')
const loginRoute = require('./src/routes/loginRoute')
const PORT = 3000;

/* Archivos Estaticos */ 
app.use(express.static('public'));
app.use('/', loginRoute);


/* View Engine */
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');


app.listen(process.env.PORT || 3000, () => console.log(`Servidor corriendo desde : http://localhost:${PORT}`))