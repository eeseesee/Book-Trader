import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/book';
import { Link } from 'react-router';

import BookList from './book-list';

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUserBooks(this.props.token);
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
        <div>
          <BookList books={this.props.books} message={this.props.message} token={this.props.token} deleteBook={this.props.deleteBook} />
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
