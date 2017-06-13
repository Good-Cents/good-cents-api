import React from 'react';
import logoWhite from '../photos/logoWhite.png';

function NavBar() {


  return (
    <div className="NavBar">
      <img src={logoWhite} className="navLogo" alt="logo" />
      <div className="navWrapper">
      <ul className="navBar">
        <li>Features</li>
        <li>Blog</li>
        <li>Log In</li>
        <li><button className="navButton">Apply Now</button></li>
      </ul>
      </div>
     
    </div>
  );
}


export default NavBar;