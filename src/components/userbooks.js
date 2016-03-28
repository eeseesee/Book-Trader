import React, { Component } from 'react';
import BookItem from './bookitem';

class UserBooks extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="user-books">
        <h3>Your Library</h3>
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

export default UserBooks;
