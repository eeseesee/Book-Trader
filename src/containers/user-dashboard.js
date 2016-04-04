import React, { Component, PropTypes } from 'react'
import Masonry from 'react-masonry-component'
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { fetchUser } from '../actions/user'
import { fetchBooks, deleteBook } from '../actions/book'
import filterBooks from '../common/filterBooks'

import BookItem from '../dummies/book-item';

class UserDashboard extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchUser(this.props.token);
  }

  render() {
    const childElements = this.props.userBooks.map((book) => {
      return (
        <BookItem isAuthenticated={this.props.isAuthenticated} key={book._id} book={book} action={'Delete Book'} bookAction={() => this.props.deleteBook(book._id, this.props.token)} afterAction={'Deleted'} />
      )
    })

    return (
      <div className="user-dashboard">
        <div>
          <h2 className="page-header">Your Personal Library</h2>
        </div>
        <Masonry >
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
            <Link className="btn btn-xl btn-xl-yellow btn-block book-item" to="/addbook"><i className="fa fa-plus"></i> Add Book</Link>
          </div>
          {childElements}
        </Masonry>
      </div>
    )
  }
}

UserDashboard.propTypes = {
  userBooks: PropTypes.array,
  deleteBook: PropTypes.func.isRequired,
  token: PropTypes.string,
  isAuthenticated: PropTypes.bool
}

function mapStateToProps(state) {
  return {
    userBooks: filterBooks(state.books, state.user._id, 'USER_BOOKS'),
    token: state.auth.token,
    isAuthenticated: state.auth.authenticated
   };
}

export default connect(mapStateToProps, { fetchUser, deleteBook })(UserDashboard);
