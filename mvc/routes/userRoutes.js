const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/submit',userController.createUser);

module.exports = router;
