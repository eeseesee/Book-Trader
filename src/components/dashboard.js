import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

import UserBooks from './userbooks';

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBooks(this.props.token);
  }

  render() {
    return (
      <div className="dashboard">
        <div>
          <button className="btn btn-default"><Link to="/addbook">Add a Book</Link></button>
          <button className="btn btn-default"><Link to="/requests">Your Requests</Link></button>
        </div>
        <div>
          <UserBooks books={this.props.books} message={this.props.message} token={this.props.token} deleteBook={this.props.deleteBook} />
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
