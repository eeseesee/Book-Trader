import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {

  dispButton() {
    if (this.props.authenticated) {
      return (
        <li className="nav-item">
          <button onClick={() => this.props.signOutUser()}>Sign Out</button>
        </li>
      );
    }

    return (
      <div>
       <li className="nav-item">
          <Link to="/login">Log In</Link>
        </li>
        <li className="nav-item">
          <Link to="/signup">Sign Up</Link>
        </li>
      </div>
    )
  }


  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/resources">Resources</Link>
            </li>
            {this.props.authenticated &&
              <li className="nav-item">
                <a onClick={() => this.props.signOutUser()}>Sign Out <i className="fa fa-sign-out"></i></a>
              </li>
            }
            {!this.props.authenticated &&
              <li className="nav-item">
                <Link to="/login">Log In</Link>
              </li>
            }
            {!this.props.authenticated &&
              <li className="nav-item">
                <Link to="/signup">Sign Up</Link>
              </li>
            }
          </ul>
        </nav>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, actions)(Header);
