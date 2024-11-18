const express = require('express');
const router = express.Router();
const agricultorControllor = require('../Controllor/Agricultor');

router.get('/', agricultorControllor.findAll);
router.post('/', agricultorControllor.create);

module.exports = router;
