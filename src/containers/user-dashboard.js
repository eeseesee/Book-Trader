import React, { Component, PropTypes } from 'react'
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
    return (
      <div className="user-dashboard">
        <div>
          <h2 className="page-header">Your Personal Library</h2>
        </div>
        <div>
          <h3><Link to="/addbook"><i className="fa fa-plus"></i> Add Book</Link></h3>
        </div>
        <div className="book-list">
          <div className="row">
            {this.props.userBooks.map((book) => {
              return <BookItem isAuthenticated={this.props.isAuthenticated} key={book._id} book={book} action={'Delete Book'} bookAction={() => this.props.deleteBook(book._id, this.props.token)} afterAction={'Deleted'} />
            })}
          </div>
        </div>
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
