const express = require('express');
const router = express.Router();
const usersController = require('../Controller/Users');



const authMiddleware = require('../middleware/auth');
const userNotFoundMiddleware = require('../middleware/userNotFound');

router.post('/', authMiddleware, usersController.createUser);
router.get('/', authMiddleware, userNotFoundMiddleware, usersController.getAllUsers);
router.get('/:id', authMiddleware, userNotFoundMiddleware, usersController.getUserById);
router.put('/:id', authMiddleware, userNotFoundMiddleware, usersController.updateUser);
router.delete('/:id', authMiddleware, userNotFoundMiddleware, usersController.deleteUser);


module.exports = router;
