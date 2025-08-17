const authService = require('../services/auth.service');

const register = async (req, res, next) => {
  console.log('Register endpoint hit:', req.body);
  try {
    const user = await authService.register(req.body);
    res.status(201).json({ message: 'User registered', user });
  } catch (err) {
    console.error('Register error:', err);
    if (err.status === 403) {
      return res.status(403).json({ message: 'Forbidden: ' + err.message });
    }
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const { token, user } = await authService.login(req.body);
    res.status(200).json({ message: 'Login successful', token, user });
  } catch (err) {
    next(err);
  }
};

module.exports = { register, login };