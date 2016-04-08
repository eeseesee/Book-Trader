import React, { Component, PropTypes } from 'react'

class BookPage extends Component  {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="book-page container">
        {this.props.children}
      </div>
    )
  }
}

BookPage.propTypes = {
  children: PropTypes.node
}

export default BookPage
