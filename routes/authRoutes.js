const express = require('express');
const router = express.Router();
const { signup } = require('../controllers/authController');

router.post('/signup', signup);

module.exports = router;

router.get('/signup', (req, res) => {

    res.sendFile('path/to/your/signup.html');
  });
  module.exports = router;