const express = require('express');
const router = express.Router();
const Controllor_cultur = require('../Controller/Culture');

router.get('/', Controllor_cultur.getAllCultures);
router.post('/', Controllor_cultur.createCulture);
router.get('/:id', Controllor_cultur.getCultureById);
router.put('/:id', Controllor_cultur.updateCulture);
router.delete('/:id', Controllor_cultur.deleteCulture);

module.exports = router;
