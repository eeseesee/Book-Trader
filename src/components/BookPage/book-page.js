import React, { Component } from 'react';

export default class BookPage extends Component  {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="book-page">
        {this.props.children}
      </div>
    )
  }
}
