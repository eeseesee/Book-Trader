import React, { Component } from 'react';
import UserBookItem from './userbookitem';

class UserBooksList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="user-books">
        <div className="row">
          {
          this.props.books.map((book) => {
            return <UserBookItem key={book._id} book={book} deleteBook={this.props.deleteBook} token={this.props.token}/>
          })
        }
        </div>
      </div>
    )
  }
}

export default UserBooksList;
