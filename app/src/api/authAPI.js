import { request } from './request';

export default {
  verify() {
    return request.get('/auth/verify');
  },
  signin(credentials) {
    return request.post('/auth/signin', credentials);
  },
  signup(user) {
    const result = request.post('/auth/signup', user);
    console.log('Result: ', result);
    return result;
  },
  getUser() {
    return request.get('/me');
  }
};