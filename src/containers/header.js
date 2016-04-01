import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { signOutUser } from '../actions/auth'
import NavBar from '../dummies/navbar'

class Header extends Component {
  render() {
    return (
      <div className="header">
        <NavBar isAuthenticated={this.props.isAuthenticated} signOutUser={() => this.props.signOutUser()} />
      </div>
    )
  }
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
  signOutUser: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.authenticated
  }
}

export default connect(mapStateToProps, { signOutUser })(Header)
