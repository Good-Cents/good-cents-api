import React, { Component } from 'react';
import './css/App.css';
import plaidAPI from './api/plaidAPI';
import authAPI from './api/authAPI';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Credentials from './components/Credentials';
import Signup from './components/Signup';
import {
  BrowserRouter as Router,
  Route, Switch, Redirect, Link
} from 'react-router-dom';
// import UserTransactions from './Plaid/UserTransactions';

class App extends Component {

  signInUser(userName, password) {
    authAPI.signin({ userName, password });
  }

  linkUser() {
    plaidAPI.get();
  }

  render() {
    return ( 
        <Router>
          <div className="App">
            <NavBar />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/login" component={Credentials}/>
                <Route path="/signup" component={Signup}/>
              </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
