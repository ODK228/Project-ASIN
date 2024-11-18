const express = require('express');
const router = express.Router();
const culturControllor = require('../Controllor/Cultur');

router.get('/', culturControllor.findAll);
router.post('/', culturControllor.create);
router.get('/:id', culturControllor.findOne);
router.put('/:id', culturControllor.update);
router.delete('/:id', culturControllor.delete);

module.exports = router;
