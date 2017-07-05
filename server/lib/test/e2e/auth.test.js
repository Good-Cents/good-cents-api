const db = require('./util/_db');
const request = require('./util/_request');
const assert = require('chai').assert;

describe('User Management (Authentication)', () => {

  before(db.drop);

  const user = {
    name: 'Jane Doe',
    email: 'goodcentstest@gmail.com',
    password: 'hunter2',
  };

  let token = '';

  describe('Sign Up / ', () => {

    it('signup happy path', () => {
      return request.post('/auth/signup')
        .send(user)
        .then(res => {
          let responses = res.redirects[0].split('=');
          token = responses[1];
          assert.ok(token);
        });
    });

  });

  describe('Sign In', () => {

    it('signin happy path', () => {
      return request.post('/auth/signin')
        .send(user)
        .then(res => {
          let responses = res.redirects[0].split('=');
          token = responses[1];
          assert.ok(token);
        });
    });

    it('token is valid', () => {
      return request.get('/auth/verify')
        .set('Authorization', token)
        .then(res => {
          assert.ok(res.body);
        });
    });

  });
});