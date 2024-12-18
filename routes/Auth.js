const express = require('express');
const router = express.Router();
const authRoutes = require('../Controller/auth/auth');

router.post('/register', authRoutes.register);
router.post('/login', authRoutes.login);

module.exports = router;
