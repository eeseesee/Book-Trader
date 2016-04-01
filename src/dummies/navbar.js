import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  handleClick(event) {
    this.props.signOutUser()
  }

  render () {
    return (
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
            <li className="nav-item">
              <Link to="/library">Library</Link>
            </li>
          </ul>
          {this.props.isAuthenticated &&
            <ul className="nav navbar-nav navbar-right">
              <li className="nav-item">
                <Link to="/mybooks">My Library</Link>
              </li>
              <li className="nav-item">
                <Link to="/requests">My Requests</Link>
              </li>
              <li className="nav-item">
                <a onClick={this.handleClick.bind(this)}>Sign Out <i className="fa fa-sign-out"></i></a>
              </li>
              <li className="nav-item">
                <Link to="mybooks/settings"><i className="fa fa-cog"></i></Link>
              </li>
            </ul>
            }
            {!this.props.isAuthenticated &&
              <ul className="nav navbar-nav navbar-right">
              <li className="nav-item">
                <Link to="/login">Log In</Link>
              </li>

              <li className="nav-item">
                <Link to="/signup">Sign Up</Link>
              </li>
            </ul>
          }
        </div>
      </div>
    </nav>
    )
  }
}

NavBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  signOutUser: PropTypes.func.isRequired
}

export default NavBar
