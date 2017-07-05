import React from 'react';
import '../css/NavBar.css';
import MobileNav from './MobileNav';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signout } from './Main/actions';
import GOODCENTS from '../photos/GOODCENTS.svg';

function NavBar({ user, signout }) {
  if (window.innerWidth < 500) return <MobileNav />;

  return (
    <div className="NavBar">
      <Link to="/"> <img src={GOODCENTS} className="navLogo" alt="logo" /></Link>
      <ul className="ListContainer">
        <Link to="/"><li>About</li></Link>
        {user
          ? <Link to="/" onClick={signout}><li>Log Out</li></Link>
          : <Link to="/auth/signin"><li>Log In</li></Link>
        }
        {user
          ? <Link to="/auth/signup"><li className="navButton">Go To Account</li></Link>
          : <Link to="/auth/signup"><li className="navButton">Create Account</li></Link>
        }
      </ul>
    </div>
  );
}

export default connect(
  state => ({ user: state.user }),
  dispatch => ({
    signout() { dispatch(signout()); }
  })
)(NavBar);


