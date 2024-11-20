const express = require('express');
const router = express.Router();
const productionController = require('../Controller/Production')

router.post('/', productionController.createProduction);
router.get('/', productionController.getAllProductions);
router.get('/:id', productionController.getProductionById);
router.put('/:id', productionController.updateProduction);
router.delete('/:id', productionController.deleteProduction);

module.exports = router;
