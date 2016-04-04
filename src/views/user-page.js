import React, { Component, PropTypes } from 'react'

class UserPage extends Component  {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="user-page container">
        {this.props.children}
      </div>
    )
  }
}

UserPage.propTypes = {
  children: PropTypes.node
}

export default UserPage
