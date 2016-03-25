import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.signInUser(this.state.email, this.state.password);
  }

  render() {
    return (
      <div className="login">
        <form className="col-sm-6 col-sm-offset-3" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
                <label>Email</label>
                <input className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange.bind(this)}/>
            </div>
            <div className="form-group">
                <label >Password</label>
                <input className="form-control" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)}/>
            </div>
            <div className="col-sm-6">
              <button type="submit" className="btn btn-xl btn-block">Login</button>
            </div>
          </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, actions)(Login);
