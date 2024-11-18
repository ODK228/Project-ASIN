const express = require('express');
const router = express.Router();
const areaControllor = require('../Controllor/area');

router.get('/', areaControllor.findAll);
router.post('/', areaControllor.create);
router.get('/:id', areaControllor.findOne);
router.put('/:id', areaControllor.update);
router.delete('/:id', areaControllor.delete);

module.exports = router;