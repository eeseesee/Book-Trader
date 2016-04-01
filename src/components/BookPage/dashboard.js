import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/book';
import { Link } from 'react-router';

import BooksList from './book-list';

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBooks(this.props.token);
  }

  render() {
    return (
      <div className="book-dashboard">
        <div>
          <h2 className="page-header">Book Trader Library</h2>
        </div>
        <div>
          <BooksList books={this.props.books} message={this.props.message} token={this.props.token} requestBook={this.props.requestBook} />
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    books: state.books,
    message: state.message,
    token: state.auth.token
   };
}

export default connect(mapStateToProps, actions)(Dashboard);
