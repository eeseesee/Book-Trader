import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Settings extends Component {
  constructor(props) {
    super(props)
    this.state = { user: {}, delete: false }
  }

  componentDidMount() {
    this.props.fetchUser(this.props.token);
  }

  componentWillReceiveProps(nextProps) {
    const fetched = nextProps.user;
    this.setState({ user: fetched });
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
    this.props.updateUser(this.state.user, this.props.token);
  }

  showDeleteButton() {
    const current = this.state.delete;
    this.setState({ delete: !current });
  }

  handleDeleteAccount(event) {
    event.preventDefault();
    this.props.deleteUser(this.props.token);
    this.props.deleteUserBooks(this.props.token);
    this.props.signOutUser();
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
                <label>City</label>
                <input className="form-control" placeholder={this.props.user.city || "City"} value={this.state.City} onChange={this.handleCityChange.bind(this)} />
            </div>
            <div className="form-group">
                <label>State</label>
                <input className="form-control" placeholder={this.props.user.state || "State"} value={this.state.USState} onChange={this.handleUSStateChange.bind(this)} />
            </div>
            <div className="action-buttons">
              <button type="submit" className="btn btn-primary btn-block">Make Changes</button>
              <button type="reset" className="btn btn-primary btn-block">Reset</button>
              {!this.state.delete &&
                <button className="btn btn-warning btn-block" onClick={this.showDeleteButton.bind(this)}>Delete Account</button>
              }
              {this.state.delete &&
                <div>
                  <label>Are you sure you want to permanently delete your account?</label>
                  <div className="col-sm-6">
                    <button className="btn btn-danger btn-block" onClick={this.handleDeleteAccount.bind(this)}>Yes</button>
                  </div>
                  <div className="col-sm-6">
                    <button className="btn btn-default btn-block" onClick={this.showDeleteButton.bind(this)}>No</button>
                  </div>
                </div>
              }
            </div>
          </form>
        </div>
        {this.props.message &&
          <div className="alert alert-danger" role="alert">{this.props.message}</div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    token: state.auth.token
   };
}

export default connect(mapStateToProps, actions)(Settings);
