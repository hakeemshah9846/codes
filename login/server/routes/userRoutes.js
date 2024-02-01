const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const authorization = require('../utils/authorization');

router.post('/user', userController.signup);
router.get('/users', authorization.checkLogin,userController.getData);
router.get('/users/:id',authorization.checkLogin, userController.getProfileData);

module.exports = router;