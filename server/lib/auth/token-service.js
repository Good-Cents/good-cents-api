const jwt = require('jsonwebtoken-promisified');
const appSecret = process.env.APP_SECRET || 'change-me';

module.exports = {
  sign(user) {
    const payload = {
      id: user._id,
      roles: user.roles
    };
    console.log('In Payload');
    return jwt.signAsync(payload, appSecret);
  },
  verify(token) {
    return jwt.verifyAsync(token, appSecret);
  }
};