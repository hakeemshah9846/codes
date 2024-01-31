const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const accessControl = require('../utils/access_control').accessControl;

router.post('/submit', userController.signup);
router.get('/getData', accessControl,userController.getData);

module.exports = router;