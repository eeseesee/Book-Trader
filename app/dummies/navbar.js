import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

class NavBar extends Component {
  constructor(props) {
    super(props)
  }

  handleClick(event) {
    this.props.signOutUser()
  }

  render () {
    return (
      <Navbar fixedTop className="topnav">
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Book Trader</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <LinkContainer to={{pathname: "/library"}}>
                <NavItem eventKey={1}>Library</NavItem>
              </LinkContainer>
              <LinkContainer to={{pathname: "/about"}}>
                <NavItem eventKey={2}>About</NavItem>
              </LinkContainer>
            </Nav>
            {this.props.isAuthenticated &&
              <Nav pullRight>
                <LinkContainer to={{pathname: "/mybooks"}}>
                  <NavItem eventKey={1}>My Library</NavItem>
                </LinkContainer>
                <LinkContainer to={{pathname: "/requests"}}>
                  <NavItem eventKey={2}>My Requests</NavItem>
                </LinkContainer>
                <NavItem eventKey={3} onClick={this.handleClick.bind(this)}>Sign Out <i className="fa fa-sign-out"></i></NavItem>
                <LinkContainer to={{pathname: "mybooks/settings"}}>
                  <NavItem eventKey={4}><i className="fa fa-cog"></i></NavItem>
                </LinkContainer>
              </Nav>
            }
            {!this.props.isAuthenticated &&
              <Nav pullRight>
                <LinkContainer to={{pathname: "/login"}}>
                  <NavItem eventKey={1}>Log In</NavItem>
                </LinkContainer>
                <LinkContainer to={{pathname: "/signup"}}>
                  <NavItem eventKey={2}>Sign Up</NavItem>
                </LinkContainer>
              </Nav>
            }
          </Navbar.Collapse>

      </Navbar>
    )
  }
}

NavBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  signOutUser: PropTypes.func.isRequired
}

export default NavBar
