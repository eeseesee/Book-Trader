import React, { Component } from 'react';

export default class AllBooks extends Component  {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="all-books">
        {this.props.children}
      </div>
    )
  }
}
