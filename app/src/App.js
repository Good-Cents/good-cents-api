import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import BankLink from './Plaid/BankLink';
import plaidAPI from './api/plaidAPI';
import Credentials from './components/Credentials';
// import UserTransactions from './Plaid/UserTransactions';

class App extends Component {
  constructor() {
    super()
  }

  signInUser(userName, password) {
    console.log('username & password:    ', userName, password);
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

          <Credentials logIn={this.signInUser}/>


        </div>
      </div>
    );
  }
}

export default App;
