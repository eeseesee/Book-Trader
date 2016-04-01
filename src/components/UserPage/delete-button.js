import React, { Component } from 'react';

class DeleteButton extends Component {
  constructor(props) {
    super(props)
  }

  handleClick(event) {
    this.props.deleteBook(this.props.bookID, this.props.token);
  }

  render() {
    return (
      <div className="delete-button">
        <button onClick={this.handleClick.bind(this)} className="btn btn-danger btn-xs">Delete Book</button>
      </div>
    )
  }
}

export default DeleteButton;
