const userService = require('../services/user.service');

const register = async (req, res, next) => {
  try {
    const user = await userService.registerUser(req.body);
    res.status(201).json({ message: 'User created', user });
  } catch (err) {
    next(err);
  }
};

module.exports = { register };
