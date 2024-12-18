const express = require('express');
const router = express.Router();
const typeUserControllers = require('../Controller/Type_users');


const authMiddleware = require('../middleware/auth');
const userNotFoundMiddleware = require('../middleware/userNotFound');


router.post('/', authMiddleware, userNotFoundMiddleware, typeUserControllers.createTypeUser);
router.get('/',  typeUserControllers.getAllTypeUsers);
router.get('/:id',  typeUserControllers.getTypeUserById);
router.put('/:id', authMiddleware, userNotFoundMiddleware, typeUserControllers.updateTypeUser);
router.delete('/:id', authMiddleware, userNotFoundMiddleware, typeUserControllers.deleteTypeUser);

module.exports = router;

