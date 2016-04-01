import React, { Component } from 'react';
import BookItem from './book-item';

class BookList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="user book-list">
        <div className="row">
          {
          this.props.books.map((book) => {
            return <BookItem key={book._id} book={book} deleteBook={this.props.deleteBook} token={this.props.token}/>
          })
        }
        </div>
      </div>
    )
  }
}

export default BookList;
