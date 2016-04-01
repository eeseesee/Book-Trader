import React, { Component } from 'react';

export default class UserPage extends Component  {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="user-page">
        {this.props.children}
      </div>
    )
  }
}
