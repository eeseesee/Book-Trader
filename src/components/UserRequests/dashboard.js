import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/book';
import { Link } from 'react-router';

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchUserRequests(this.props.token);
  }

  render() {
    return (
      <div className="request-dashboard">
        <div>
          <h2 className="page-header">Your Personal Library</h2>
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
