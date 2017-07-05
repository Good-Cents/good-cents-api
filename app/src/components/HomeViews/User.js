import React from 'react';
import profilePic from '../../photos/profile-in-circle-christine.png';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../../css/User.css';

function User({ user, accounts }) {
  return (
    <div className="profile-sidebar">
      <div className="profile-userpic">
        <img src={profilePic} className="img-responsive" alt="" />
      </div>
      <div className="profile-usertitle">
        <div className="profile-usertitle-name">
          {user.name}
        </div>
        <div className="profile-usertitle-job">
          {user.email}
        </div>
        <div className="profile-userbuttons">
          {user.plaid.accounts
            ? <button type="button" className="btn btn-success btn-sm">Accounts Linked</button>
            : <button type="button" className="btn btn-danger btn-sm">Accounts Not Linked</button>
          }
        </div>
      </div>
      <div className="profile-userbuttons">
        <button type="button" className="btn btn-success btn-sm">Pause Transactions</button>
        <button type="button" className="btn btn-danger btn-sm">Delete Account</button>
      </div>
    </div>
  );
}


export default withRouter(connect(
  state => ({
    user: state.user,
    piggybank: state.piggybank
  })
)(User));