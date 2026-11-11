//endpoints
const express = require('express');
const router= express.Router();
const userController = require('../controllers/userController');

router.get('/enrollment', userController.getAllUsers);
router.post('/enrollment',userController.createUser);
router.delete('/enrollment/',userController.deleteUser);

module.exports = router;
