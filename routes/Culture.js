const express = require('express');
const router = express.Router();
const Controllor_cultur = require('../Controller/Culture');



const authMiddleware = require('../middleware/auth');
const userNotFoundMiddleware = require('../middleware/userNotFound');


router.get('/', Controllor_cultur.getAllCultures);
router.post('/', authMiddleware, userNotFoundMiddleware, Controllor_cultur.createCulture);
router.get('/:id', Controllor_cultur.getCultureById);
router.put('/:id', authMiddleware, userNotFoundMiddleware, Controllor_cultur.updateCulture);
router.delete('/:id', authMiddleware, userNotFoundMiddleware, Controllor_cultur.deleteCulture);

module.exports = router;
