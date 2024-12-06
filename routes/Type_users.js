const express = require('express');
const router = express.Router();
const typeUserControllers = require('../Controller/Type_users');

router.post('/', typeUserControllers.createTypeUser);
router.get('/', typeUserControllers.getAllTypeUsers);
router.get('/:id', typeUserControllers.getTypeUserById);
router.put('/:id', typeUserControllers.updateTypeUser);
router.delete('/:id', typeUserControllers.deleteTypeUser);

module.exports = router;
