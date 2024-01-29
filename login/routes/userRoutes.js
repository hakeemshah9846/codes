const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/submit', userController.signup);

module.exports = router;