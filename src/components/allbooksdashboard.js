import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

import AllBooksList from './allbookslist';

class AllBooksDashboard extends Component {
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
          <h1>Book Trader Library</h1>
        </div>
        <div>
          <AllBooksList books={this.props.books} message={this.props.message} token={this.props.token} />
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

export default connect(mapStateToProps, actions)(AllBooksDashboard);
