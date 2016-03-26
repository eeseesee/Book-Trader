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

  componentWillUnmount() {
    this.props.setMessage('');
  }

  render() {
    return (
      <div className="login col-sm-4 col-sm-offset-4">
        <div>
          <form className="" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
                <label>Email</label>
                <input className="form-control" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange.bind(this)} />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input className="form-control" type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)} />
            </div>
            <div>
              <button type="submit" className="btn btn-primary">Login</button>
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
  return { message: state.message.alert };
}

export default connect(mapStateToProps, actions)(Login);
