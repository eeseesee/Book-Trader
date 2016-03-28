import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AddBook extends Component {
  constructor(props) {
    super(props)
    this.state = { book: {} }
  }

  handleTitleChange(event) {
    const newBook = this.state.book;
    newBook.title = event.target.value;
    this.setState({ book: newBook })
  }

  handleAuthorChange(event) {
    const newBook = this.state.book;
    newBook.author = event.target.value;
    this.setState({ book: newBook })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addBook(this.state.book, this.props.token);
  }

  render() {
    return (
      <div className="add-book">
        <h3>Add to your library</h3>
        <div>
          <form className="" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
                <label>Title</label>
                <input className="form-control" placeholder={"Title"} value={this.state.book.title} onChange={this.handleTitleChange.bind(this)}/>
            </div>
            <div className="form-group">
                <label>Author</label>
                <input className="form-control" placeholder={"Author"} value={this.state.book.author} onChange={this.handleAuthorChange.bind(this)}/>
            </div>
            <div className="action-buttons">
              <button type="submit" className="btn btn-primary btn-block">Add Book</button>
            </div>
          </form>
        </div>
        {this.props.message &&
          <div className="alert alert-danger" role="alert">{this.props.message}</div>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    message: state.message,
    token: state.auth.token
   };
}

export default connect(mapStateToProps, actions)(AddBook);
