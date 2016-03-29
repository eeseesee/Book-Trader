import React, { Component } from 'react';

export default class UserBooks extends Component  {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="user-books">
        {this.props.children}
      </div>
    )
  }
}
