import React from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signout } from './Main/actions';
import GOODCENTS from '../photos/GOODCENTS.svg';

class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    const { user, signout } = this.props;
    return (
      <div>
        <Navbar color="faded" light>
          {/*<NavbarBrand><img src={GOODCENTS} className="navLogo" alt="logo"/></NavbarBrand>*/}
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse className="navbar-toggleable-md" isOpen={!this.state.collapsed}>
            <Nav navbar>
              <NavItem>
                <NavLink className="nav-item" href="/">About</NavLink>
              </NavItem>
              <NavItem>
                {user
                  ? <Link to="/" onClick={signout}><li>Log Out</li></Link>
                  : <Link to="/auth/signin"><li>Log In</li></Link>
                }
              </NavItem>
              <NavItem>
                <NavLink className="nav-item" href="/auth/signup">Create Account</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default connect(
  state => ({ user: state.user }),
  dispatch => ({
    signout() { dispatch(signout()); }
  })
)(Example);