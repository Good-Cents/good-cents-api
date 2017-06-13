import React from 'react';

export default ({ submit, allowName = false }) => (
  <form onSubmit={e => {
    e.preventDefault();
    const { elements } = e.target;
    const data = Object.keys(elements).reduce((obj, key) => {
      obj[key] = elements[key].value;
      return obj;
    }, {});
    submit(data);
  }}>
    {allowName &&
      <label>name: <input name="name" /></label>
    }
    <label>email: <input name="email" /></label>
    <label>password: <input type="password" name="password" /></label>
    <button>Log In</button>
  </form>
);