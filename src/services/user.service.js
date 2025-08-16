const userRepo = require('../repositories/user.repo');

const registerUser = async (userData) => {
    const user = await userRepo.getUserByEmail(userData.email);
    if (user) throw new Error('User already exists');
    return await userRepo.createUser(userData);
};

module.exports = { registerUser };
