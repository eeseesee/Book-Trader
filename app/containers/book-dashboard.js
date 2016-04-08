import React, { Component, PropTypes } from 'react'
import Masonry from 'react-masonry-component'
import { connect } from 'react-redux'
import { requestBook } from '../actions/requests'
import filterBooks from '../common/filterBooks'

import BookItem from '../dummies/book-item';

class BookDashboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const childElements = this.props.availableBooks.map((book) => {
      return (
        <BookItem isAuthenticated={this.props.isAuthenticated} key={book._id} book={book} action={'Request Book'} bookAction={() => this.props.requestBook(book._id, this.props.token)} afterAction={'Requested'} />
        )
      })

    return (
      <div className="book-dashboard">
        <div>
          <h2 className="page-header">Book Trader Library</h2>
        </div>
        <Masonry >
          {childElements}
        </Masonry>
      </div>
    )
  }
}

BookDashboard.propTypes = {
  availableBooks: PropTypes.array,
  requestBook: PropTypes.func.isRequired,
  token: PropTypes.string,
  isAuthenticated: PropTypes.bool
}

function mapStateToProps(state) {
  return {
    availableBooks: filterBooks(state.books, state.user._id, 'AVAILABLE_BOOKS'),
    token: state.auth.token,
    isAuthenticated: state.auth.authenticated
   };
}

export default connect(mapStateToProps, { requestBook })(BookDashboard);
