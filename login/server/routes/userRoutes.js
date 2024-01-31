const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const accessControl = require('../utils/access_control').accessControl;

router.post('/user', userController.signup);
router.get('/users', accessControl,userController.getData);

module.exports = router;