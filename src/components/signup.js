import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '', email: '', password: '', confirmPassword: '' };
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleconfirmPasswordChange(event) {
    this.setState({ confirmPassword: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validatePassword()) {
      this.props.signUpUser(this.state.name, this.state.email, this.state.password);
    }
  }

  validatePassword() {
    if (this.state.password === this.state.confirmPassword) {
      return true;
    }
    this.props.setMessage('Passwords do not match. Try again!');
  }

  componentWillUnmount() {
    this.props.setMessage('');
  }

  render() {
    return (
      <div className="signup col-sm-4 col-sm-offset-4">
        <div>
        <form className="" onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
              <label>Name</label>
              <input className="form-control" placeholder="Name" value={this.state.name} onChange={this.handleNameChange.bind(this)}/>
          </div>
            <div className="form-group">
                <label>Email</label>
                <input className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange.bind(this)}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input className="form-control" type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input className="form-control" type="password" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.handleconfirmPasswordChange.bind(this)} />
            </div>
            <div>
              <button type="submit" className="btn btn-primary">Create Account</button>
            </div>
          </form>
        </div>
        {this.props.message &&
        <div>
          <div className="alert alert-danger" role="alert">{this.props.message}</div>
        </div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { message: state.message.message };
}

export default connect(mapStateToProps, actions)(Signup);
