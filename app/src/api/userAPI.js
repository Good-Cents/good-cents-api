const API_URL = '/api/users';

export default {
  getAll() {
    return fetch(API_URL)
      .then(res => res.json());
  },

  getUser(id) {
    return fetch(`${API_URL}/${id}`)
      .then(res => res.json());
  },

  addUser(user) {
    return fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: new Headers({ 'Content-Type': 'application/json' })
    })
      .then(res => Promise.all([res.ok, res.json()]))
      .then(([ok, json]) => {
        if (!ok) throw json;
        return json;
      });
  },

  deleteUser(userId) {
    return fetch(`${API_URL}/${userId}`, {
      method: 'DELETE',
      headers: new Headers({ 'Content-Type': 'application/json' })
    });
  }
};