import React from 'react';
import '../../css/About.css';

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
      <label className="sign-in-label">name: <input name="name" /></label>
    }
    <label className="sign-in-label">email: <input name="email" /></label>
    <label className="sign-in-label">password: <input type="password" name="password" /></label>
    <button>Log In</button>
  </form>
);