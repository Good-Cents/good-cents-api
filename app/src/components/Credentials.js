import React, { Component } from 'react';



export default class Credentials extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: ''
    };

    this.changeUserName =event => this.setState({userName:event.target.value});
    this.changePassword=event => this.setState({password:event.target.value});
    this.logIn=()=> props.logIn(this.state.userName, this.state.password);
  }

  render() {



    return (
      <div>
       
          <div>
            <label>User Name:
                <input onChange = {this.changeUserName} value={this.state.userName} />
            </label>
          </div>
          <div>
            <label>Password:
                <input type="password" onChange = {this.changePassword} value={this.state.password} />
            </label>
          </div>
          <div>
            <button onClick={this.logIn}>Sign In</button>
          </div>
        
      </div>
    );
  }
}