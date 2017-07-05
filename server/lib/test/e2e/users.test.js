const db = require('./util/_db');
const request = require('./util/_request');
const assert = require('chai').assert;

describe('User Management API', () => {

  before(db.drop);

  let token = '';

  //create a token!
  before(() => {
    return request.post('/auth/signup')
      .send({
        username: 'anon47',
        name: 'John Doe',
        email: 'john@me.com',
        goals: [],
        plaid: {
          plaid_item_id: '',
          access_token: '',
          accounts: [],
          transactions: []
        }
      })
      .then(res => {
        let responses = res.redirects[0].split('=');
        token = responses[1];
      });
  });

  it('initial /GET', () => {
    return request
      .get('/users')
      .set('Authorization', token)
      .then(res => {
        const users = res.body;
        assert.ok(users);
      });
  });

  let Keeley = {
    username: 'keeley',
    name: 'Keeley',
    email: 'keeley@me.com',
    password: 'fakePassword',
    goals: [],
    plaid: {
      plaid_item_id: '',
      access_token: '',
      accounts: [],
      transactions: []
    }
  };

  let Ivy = {
    username: 'ivypatton',
    name: 'Ivy',
    email: 'ivy@fake.com',
    password: 'fakePassword',
    goals: [],
    plaid: {
      plaid_item_id: '',
      access_token: '',
      accounts: [],
      transactions: []
    }
  };

  function saveUser(user) {
    return request
      .post('/users')
      .send(user)
      .set('Authorization', token)
      .then(res => res.body);
  }

  it('roundtrips a new user', () => {
    return saveUser(Keeley)
      .then(savedUser => {
        assert.ok(savedUser._id, 'saved has id');
        Keeley = savedUser;
      })
      .then(() => {
        return request.get(`/users/${Keeley._id}`)
          .set('Authorization', token);
      })
      .then(res => res.body)
      .then(gotUser => {
        assert.deepEqual(gotUser, Keeley);
      });
  });

  it('returns list of all users', () => {
    return saveUser(Ivy)
      .then(savedUser => {
        Ivy = savedUser;
      })
      .then(() => {
        return request.get('/users')
          .set('Authorization', token);
      })
      .then(res => res.body)
      .then(users => {
        assert.equal(users.length, 5);
      });
  });

  it('updates users', () => {
    Keeley.name = 'Oprah';
    return request.put(`/users/${Keeley._id}`)
      .send(Keeley)
      .set('Authorization', token)
      .then(res => res.body)
      .then(updated => {
        assert.equal(updated.name, 'Oprah');
      });
  });

  it('deletes a user', () => {
    return request.delete(`/users/${Keeley._id}`)
      .set('Authorization', token)
      .then(res => res.body)
      .then(result => {
        assert.isTrue(result.removed);
      });
  });

  it('deletes a non-existent user, returns removed false', () => {
    return request.delete(`/users/${Keeley._id}`)
      .set('Authorization', token)
      .then(res => res.body)
      .then(result => {
        assert.isFalse(result.removed);
      });
  });

  it('errors on validation falure', () => {
    return saveUser({})
      .then(
      () => { throw new Error('expected failure'); },
      () => { }
      );
  });
});