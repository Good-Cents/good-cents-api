import React, { Component } from 'react';
import './css/App.css';
import NavBar from './components/NavBar';
import LandingPage from './components/Main/LandingPage';
import About from './components/About';
import Auth from './components/Main/Auth';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route, 
  Switch
} from 'react-router-dom';
// import UserTransactions from './Plaid/UserTransactions';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/auth" render={() => <Auth/>}/>
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
