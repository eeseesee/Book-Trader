import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Alert, Button } from 'react-bootstrap'
import Header from './header'
import { setMessage } from '../actions/auth'
import { fetchBooks } from '../actions/book'

/* global styles for app */
import '../../public/app.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.fetchBooks
    this.handleDismissClick = this.handleDismissClick.bind(this)
  }

  componentWillMount() {
    this.props.fetchBooks()
  }

  handleDismissClick(event) {
    this.props.setMessage('')
    event.preventDefault()
  }

  renderErrorMessage() {
    if (!this.props.message) {
      return null
    }

    return (
      <Alert className="alert" bsStyle="danger" onDismiss={this.handleDismissClick}>
        <h4>Uh oh! You got an error!</h4>
        <p>{this.props.message}</p>
        <p>
          <Button onClick={this.handleDismissClick}>OK</Button>
        </p>
      </Alert>
    )
  }

  render() {
    return (
      <div>
        <Header />
        {this.renderErrorMessage()}
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  message: PropTypes.string,
  setMessage: PropTypes.func.isRequired,
  children: PropTypes.node,
  fetchBooks: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    message: state.message,
  }
}

export default connect(mapStateToProps, { fetchBooks, setMessage })(App)
