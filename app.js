const express = require('express');
const app = express();
const PORT = 3000;

// /* Estaticos */ 

app.use(express.static('public'));


app.listen(PORT, () => console.log(`Servidor corriendo desde el puerto: ${PORT}`))