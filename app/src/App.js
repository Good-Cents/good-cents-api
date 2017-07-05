import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import LandingPage from './components/Main/LandingPage';
import Onboard from './components/Onboard';
import Home from './components/Home';
import Auth from './components/Main/Auth';
import Contribution from './components/HomeViews/Contribution';
import Success from './components/HomeViews/Success';
import { checkForToken } from './components/Main/actions';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux';
import './css/App.css';

class App extends Component {
  componentDidMount() {
    this.props.checkForToken();
  }

  render() {
    const { user } = this.props;
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/auth" render={() => <Auth />} />
            {user &&
              <Route path="/onboard" component={Onboard} />
            }
            <Route path="/home" component={Home} />
            <Route path='/cashout' component={Contribution} />
            <Route path='/success' component={Success} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  dispatch => ({
    checkForToken() { dispatch(checkForToken()); }
  })
)(App);
