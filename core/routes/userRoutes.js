const router = require('express').Router();

const userController = require('../controller/userController');

//API for listing user
router.get('/', userController.getAllUsers);

//API for updating user
router.put('/', userController.updateUser);

//API for creating user
router.post('/', userController.createUser);

// API for deleting user
router.delete('/:id', userController.deleteUser);

module.exports = router;
