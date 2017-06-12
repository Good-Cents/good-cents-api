const jwt = require('jsonwebtoken-promisified');
const appSecret = process.env.APP_SECRET || 'update-for-spotify-users';

module.exports = {
  sign(user) {
    const payload = {
      id: user._id,
      roles: user.roles,
      spotify: user._spotifyId
    };
    return jwt.signAsync(payload, appSecret);
  },
  verify(token) {
    return jwt.verifyAsync(token, appSecret);
  }
};