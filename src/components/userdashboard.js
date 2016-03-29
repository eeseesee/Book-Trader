import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

import UserBooksList from './userbookslist';

class UserDashboard extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUserBooks(this.props.token);
  }

  render() {
    return (
      <div className="dashboard user-dashboard">
        <div>
          <h1>Your Personal Library</h1>
        </div>
        <div>
          <h3><Link to="/addbook"><i className="fa fa-plus"></i> Add Book</Link></h3>
        </div>
        <div>
          <UserBooksList books={this.props.books} message={this.props.message} token={this.props.token} deleteBook={this.props.deleteBook} />
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

export default connect(mapStateToProps, actions)(UserDashboard);
