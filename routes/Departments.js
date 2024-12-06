
const express = require('express');
const router = express.Router();
const DepartementsControllers = require('../Controller/Departments');

router.post('/', DepartementsControllers.createDepartement);
router.get('/', DepartementsControllers.getAllDepartements);
router.get('/:id', DepartementsControllers.getDepartementById);
router.put('/:id', DepartementsControllers.updateDepartement);
router.delete('/:id', DepartementsControllers.deleteDepartement);

module.exports = router;
