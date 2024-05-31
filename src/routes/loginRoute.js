const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.render('login', {
             tittle: 'CAC Login',
             style: '../styles/style.css'
         });
})

router.get('/home', (req,res) => {
  res.render('home', {
             tittle: 'CAC Home',
             style: '../styles/style.css'
         });
})


module.exports = router;