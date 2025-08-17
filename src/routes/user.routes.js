const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const auth = require('../middlewares/auth.middleware');
router.get('/profile', auth, (req, res) => {
  res.json({ message: 'Welcome to your profile', user: req.user });
});

router.post('/register', userController.register);

module.exports = router;
