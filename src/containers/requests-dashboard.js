import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { approveRequest, removeRequest } from '../actions/requests'
import filterBooks from '../common/filterBooks'

import RequestItem from '../dummies/request-item';

class RequestsDashboard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="requests-dashboard">
        <div>
          <h2 className="page-header">Your Book Requests</h2>
        </div>
        <div className="col-md-3">
          <h3 className="page-header">Requests</h3>
          <div className="book-list">
            <div className="row">
              {this.props.requestedBooks.map((book) => {
                return <RequestItem key={book._id} book={book} action={'Approve request'} bookAction={() => this.props.approveRequest(book._id, this.props.token)} afterAction={'Approved'} />
              })}
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <h3 className="page-header">On Loan</h3>
          <div className="book-list">
            <div className="row">
              {this.props.onLoanBooks.map((book) => {
                return <RequestItem key={book._id} book={book} />
              })}
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <h3 className="page-header">Pending requests</h3>
          <div className="book-list">
            <div className="row">
              {this.props.pendingRequests.map((book) => {
                return <RequestItem key={book._id} book={book} action={'Cancel request'} bookAction={() => this.props.removeRequest(book._id, this.props.token)} afterAction={'Cancelled'} />
              })}
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <h3 className="page-header">Borrowed</h3>
          <div className="book-list">
            <div className="row">
              {this.props.approvedRequests.map((book) => {
                return <RequestItem key={book._id} book={book} action={'Return book'} bookAction={() => this.props.removeRequest(book._id, this.props.token)} afterAction={'Returned'} />
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

RequestsDashboard.propTypes = {
  requestedBooks: PropTypes.array,
  pendingRequests: PropTypes.array,
  approvedRequests: PropTypes.array,
  token: PropTypes.string,
  approveRequest: PropTypes.func.isRequired,
  removeRequest: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    requestedBooks: filterBooks(state.books, state.user._id, 'REQUESTED_BOOKS'),
    onLoanBooks: filterBooks(state.books, state.user._id, 'ON_LOAN_BOOKS'),
    pendingRequests: filterBooks(state.books, state.user._id, 'PENDING_REQUESTS'),
    approvedRequests: filterBooks(state.books, state.user._id, 'APPROVED_REQUESTS'),
    token: state.auth.token
   };
}

export default connect(mapStateToProps, { approveRequest, removeRequest })(RequestsDashboard);
