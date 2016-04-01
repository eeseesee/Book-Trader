import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../../actions/auth';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <div className="navbar-brand"><Link to="/">Book Trader</Link></div>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              {this.props.authenticated &&
                <li className="nav-item">
                  <Link to="/books">Library</Link>
                </li>
              }
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {this.props.authenticated &&
                <li className="nav-item">
                  <Link to="/mybooks">My Library</Link>
                </li>
              }
              {this.props.authenticated &&
                <li className="nav-item">
                  <Link to="/requests">My Requests</Link>
                </li>
              }
              {this.props.authenticated &&
                <li className="nav-item">
                  <a onClick={() => this.props.signOutUser()}>Sign Out <i className="fa fa-sign-out"></i></a>
                </li>
              }
              {this.props.authenticated &&
                <li className="nav-item">
                  <Link to="mybooks/settings"><i className="fa fa-cog"></i></Link>
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
          </div>
        </div>
      </nav>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { authenticated: state.auth.authenticated };
}

export default connect(mapStateToProps, actions)(Header);
