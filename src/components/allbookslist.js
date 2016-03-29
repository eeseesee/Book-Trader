import React, { Component } from 'react';
import AllBookItem from './allbookitem';

class AllBooksList extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="all-books-list">
        <div className="row">
          {
          this.props.books.map((book) => {
            return <AllBookItem key={book._id} book={book} token={this.props.token}/>
          })
        }
        </div>
      </div>
    )
  }
}

export default AllBooksList;
