import React, { Component } from 'react';
import DeleteButton from './delete-button';

class BookItem extends Component {
  constructor(props) {
    super(props)
  }

  handleDelete(event) {
    event.preventDefault();
    this.props.deleteBook(this.props.book._id, this.props.token);
  }

  render() {
    let title = this.props.book.title;
    title = title ? title.substring(0,100) : null;
    title = title.length > 99 ? title+'...' : title;

    let authors = this.props.book.authors;
    authors = authors ? authors.join(', ') : null;

    let thumbnail = this.props.book.thumbnail;
    thumbnail = thumbnail ? thumbnail : null;

    return (
      <div className="book-item">
        <div className="col-sm-4 col-md-3">
          <div className="thumbnail">
            <img src={thumbnail} alt={title}></img>
            <div className="caption">
              <h3 className="title">{title}</h3>
              <h4 className="author">{authors}</h4>
              <DeleteButton token={this.props.token} deleteBook={this.props.deleteBook} bookID={this.props.book._id} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BookItem;
