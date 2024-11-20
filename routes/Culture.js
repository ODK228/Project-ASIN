const express = require('express');
const router = express.Router();
const Controllor_cultur = require('../Controller/Culture');

router.get('/', Controllor_cultur.findAll);
router.post('/', Controllor_cultur.create);
router.get('/:id', Controllor_cultur.findOne);
router.put('/:id', Controllor_cultur.update);
router.delete('/:id', Controllor_cultur.delete);

module.exports = router;
