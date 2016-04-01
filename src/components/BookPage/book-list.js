import React, { Component } from 'react';
import BookItem from './book-item';

class BookList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="book book-list">
        <div className="row">
          {
          this.props.books.map((book) => {
            return <BookItem key={book._id} book={book} token={this.props.token} requestBook={this.props.requestBook} />
          })
        }
        </div>
      </div>
    )
  }
}

export default BookList;
