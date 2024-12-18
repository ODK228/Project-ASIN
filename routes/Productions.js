const express = require('express');
const router = express.Router();
const productionController = require('../Controller/Production')


const authMiddleware = require('../middleware/auth');
const userNotFoundMiddleware = require('../middleware/userNotFound');


router.post('/', authMiddleware, userNotFoundMiddleware, productionController.createProduction);
router.get('/', productionController.getAllProductions);
router.get('/:id', productionController.getProductionById);
router.put('/:id', authMiddleware, userNotFoundMiddleware, productionController.updateProduction);
router.delete('/:id', authMiddleware, userNotFoundMiddleware, productionController.deleteProduction);

module.exports = router;

