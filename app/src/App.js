import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import BankLink from './Plaid/BankLink';
import plaidAPI from './Plaid/plaidAPI';

class App extends Component {
  constructor() {
    super()
  }

  signInUser() {
    //
  }

  linkUser() {
    plaidAPI.get()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Good Cents API</h2>
        </div>
        <div className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <BankLink />
        </div>
      </div>
    );
  }
}

export default App;
