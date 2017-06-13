import React, { Component } from 'react';
import './css/App.css';
import BankLink from './Plaid/BankLink';
import plaidAPI from './api/plaidAPI';
import Credentials from './components/Credentials';
import authAPI from './api/authAPI';
import NavBar from './components/NavBar';
import saveYourWay from './photos/saveYourWay.jpg';
import backpackBanner from './photos/backpackBanner.jpg'
// import UserTransactions from './Plaid/UserTransactions';

class App extends Component {
  constructor() {
    super()
  }

  signInUser(userName, password) {
    console.log('username & password:    ', userName, password);
    authAPI.signin({ userName, password });
    //
  }

  linkUser() {
    plaidAPI.get()
  }

  render() {
    return (
      <div className="App">
        <NavBar />
     
          <img src={saveYourWay} alt="backpack" />
         <div className="welcomeHome">
            <h2 className="dash-trailing">This Is Good Cents.</h2>
            <p>One taste silent disco beltane, patchouli retreat. Tahini Hafiz tofu, ancient toxins rites of passage surrender chia seeds natural homebirth om Dr. Bronner's. Doula ecstatic dance transformative solstice third eye midwifery higher cosmic force medical marijuana papyrus font, organic raw cacao. Namaste. A Simple Shared account helps you and your partner easily budget, save, and talk about money. In good financial partnership, one plus one can equal anything.</p>
          </div>
        

         <BankLink />

        <Credentials logIn={this.signInUser} />


      </div>
    );
  }
}

export default App;
