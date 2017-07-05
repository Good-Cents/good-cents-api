import { request } from './request';

export default {
  postAccessToken(token) {
    return request.post('/me/accounts', { public_token: token });
  },

  getTransactions(token) {
    return request.get('/me/transactions');
  }
};