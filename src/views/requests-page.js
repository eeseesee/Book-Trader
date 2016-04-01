import React, { Component, PropTypes } from 'react'

class RequestsPage extends Component  {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="requests-page">
        {this.props.children}
      </div>
    )
  }
}

RequestsPage.propTypes = {
  children: PropTypes.node
}

export default RequestsPage
