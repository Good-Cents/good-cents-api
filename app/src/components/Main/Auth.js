import React from 'react';
import { Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin, signup } from './actions';
import Credentials from './Credentials';
import Cents from '../../photos/cents.png';
import '../../css/Onboard.css';

function Auth({ user, signin, signup, error, location, token }) {
  if (user) return <Redirect to="/onboard" />;
  return (
    <div className="About">
      <img src={Cents} alt="Cents" />
      <Switch>
        <Route path="/auth/signin" component={() => (
          <div className="sign-in-up">
            <h2 className="cursive">Sign into your account here:</h2>
            <Credentials submit={signin} />
            <p>Not yet registered? <Link to="/auth/signup">Sign Up</Link></p>
            {error &&
              <div>{error}</div>
            }
          </div>
        )} />
        <Route path="/auth/signup" render={() => (
          <div className="sign-in-up">
            <h2>Welcome! Create your account here:</h2>
            <Credentials submit={signup} allowName={true} />
            <p>Already have an account? <Link to="/auth/signin">Sign In</Link></p>
            {error &&
              <div>{error}</div>
            }
          </div>
        )} />
      </Switch>
    </div>
  );
}

export default withRouter(connect(
  state => ({
    error: state.error,
    user: state.user
  }),
  dispatch => ({
    signup(user) { dispatch(signup(user)); },
    signin(credentials) { dispatch(signin(credentials)); }
  })
)(Auth));