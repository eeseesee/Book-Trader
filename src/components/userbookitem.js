import React, { Component } from 'react';

class UserBookItem extends Component {
  constructor(props) {
    super(props)
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.deleteBook(this.props.book._id, this.props.token);
  }

  render() {
    return (
      <div className="col-sm-4 col-md-3">
        <div className="thumbnail">
          <img src="http://placehold.it/242x200" alt="Placeholder"></img>
          <div className="caption">
            <h3>{this.props.book.title}</h3>
            <p>{this.props.book.author}</p>
            <button onClick={this.handleDelete.bind(this)} className="btn btn-danger">Delete Book</button>
          </div>
        </div>
      </div>
    )
  }
}

export default UserBookItem;
