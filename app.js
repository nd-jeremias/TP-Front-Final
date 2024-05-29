const express = require('express');
const app = express();
const PORT = 3000;

/* Archivos Estaticos */ 
app.use(express.static('public'));

//app.get('./login')

/* View Engine */
app.set('view engine', 'ejs');
app.set('views', __dirname + '/src/views');

/* Routes */
app.get('/', (req, res) => {
    res.render('home', {
        tittle: 'CAC Home',
        style: '../styles/style.css'
    });
});

app.get('/login', (req, res) => {
    res.render('login', {
        tittle: 'CAC Login',
        style: '../styles/style.css'
    });
});

app.listen(PORT, () => console.log(`Servidor corriendo desde : http://localhost:${PORT}`))