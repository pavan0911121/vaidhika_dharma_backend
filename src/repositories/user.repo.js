const User = require('../models/user.model');

const createUser = async (data) => {
  return await User.create(data);
};

const getUserByEmail = async (email) => {
  return await User.findOne({ email });
};

module.exports = { createUser, getUserByEmail };
