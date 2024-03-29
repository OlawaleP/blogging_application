const express = require('express');
const router = express.Router();
const { signup, signin, logout, userProfile } = require ('../controllers/authController');
const { isAuthenticate } = require('../middleware/auth');

// auth routes
// /api/signup
router.post('/signup', signup);
// /api/signin
router.post('/login', signin);
// /api/signin
router.get('/logout', logout);
// /api/me
router.get('/user', isAuthenticate, userProfile);

module.exports = router;