import React, { Component } from 'react';

class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = { user: this.props.user }
  }

  handleNameChange(event) {
    const newUser = this.state.user;
    newUser.name = event.target.value;
    this.setState({ user: newUser })
  }

  handleEmailChange(event) {
    const newUser = this.state.user;
    newUser.email = event.target.value;
    this.setState({ user: newUser })
  }

  handlePasswordChange(event) {
    const newUser = this.state.user;
    newUser.password = event.target.value;
    this.setState({ user: newUser })
  }

  handleconfirmPasswordChange(event) {
    const newUser = this.state.user;
    newUser.confirmPassword = event.target.value;
    this.setState({ user: newUser })
  }

  handleCityChange(event) {
    const newUser = this.state.user;
    newUser.city = event.target.value;
    this.setState({ user: newUser })
  }

  handleUSStateChange(event) {
    const newUser = this.state.user;
    newUser.state = event.target.value;
    this.setState({ user: newUser })
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.validatePassword()) {
      this.props.updateUser(this.state.user, this.props.token);
    }
  }

  validatePassword() {
    if (this.state.user.password === this.state.user.confirmPassword) {
      return true;
    }
    this.props.setMessage('Passwords do not match. Try again!');
  }

  render() {
    return (
      <div className="login col-sm-4 col-sm-offset-4">
        <h3>Edit Account Settngs</h3>
        <div>
          <form className="" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
                <label>Name</label>
                <input className="form-control" placeholder={this.props.user.dispName || "Name"} value={this.state.name} onChange={this.handleNameChange.bind(this)}/>
            </div>
            <div className="form-group">
                <label>Email</label>
                <input className="form-control" placeholder={this.props.user.email || "Email"} value={this.state.email} onChange={this.handleEmailChange.bind(this)}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input className="form-control" type="password" placeholder="New Password" value={this.state.password} onChange={this.handlePasswordChange.bind(this)}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input className="form-control" type="password" placeholder="Confirm New Password" value={this.state.confirmPassword} onChange={this.handleconfirmPasswordChange.bind(this)} />
            </div>
            <div className="form-group">
                <label>City</label>
                <input className="form-control" placeholder={this.props.user.city || "City"} value={this.state.City} onChange={this.handleCityChange.bind(this)} />
            </div>
            <div className="form-group">
                <label>State</label>
                <input className="form-control" placeholder={this.props.user.USState || "State"} value={this.state.USState} onChange={this.handleUSStateChange.bind(this)} />
            </div>
            <div>
              <button type="submit" className="btn btn-primary btn-block">Make Changes</button>
              <button type="reset" className="btn btn-primary btn-block">Reset</button>
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

export default Settings;
