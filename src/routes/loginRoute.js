const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  res.render('login', {
             tittle: 'CAC Login',
             style: '../styles/style.css'
         });
})

module.exports = router;