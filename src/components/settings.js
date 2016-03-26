import React, { Component } from 'react';

class Settings extends Component {
  render() {
    return (
      <div className="login col-sm-4 col-sm-offset-4">
        <h3>Edit Account Settngs</h3>
        <div>
          <form className="" >
            <div className="form-group">
                <label>Name</label>
                <input className="form-control" placeholder="Name" />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input className="form-control" type="password" placeholder="Password" />
            </div>
            <div className="form-group">
                <label>City</label>
                <input className="form-control" placeholder="City" />
            </div>
            <div className="form-group">
                <label>State</label>
                <input className="form-control" placeholder="State"  />
            </div>
            <div>
              <button type="submit" className="btn btn-primary btn-block">Make Changes</button>
              <button type="reset" className="btn btn-primary btn-block">Reset</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Settings;
