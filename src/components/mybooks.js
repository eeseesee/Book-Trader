import React, { Component } from 'react';

export default class MyBooks extends Component  {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="my-books">
        {this.props.children}
      </div>
    )
  }
}
