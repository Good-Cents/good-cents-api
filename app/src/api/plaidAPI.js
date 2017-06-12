const API_URL = '/api/plaid';

export default {
  getAccounts() {
    return fetch(API_URL)
      .then(res => res.json());
  },

  getUser(id) {
    return fetch(`${API_URL}/${id}`)
      .then(res => res.json());
  },
};