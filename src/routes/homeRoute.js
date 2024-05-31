const express = require('express');
const router = express.Router();

router.get('/home', (req,res) => {
  res.render('home', {
             tittle: 'CAC Home',
             style: '../styles/style.css'
         });
})


module.exports = router;