import React, { Component } from 'react';
import AddButton from './add-button';

class BookItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let title = this.props.result.title;
    title = title ? title.substring(0,100) : null;
    title = title.length > 99 ? title+'...' : title;

    let authors = this.props.result.authors;
    authors = authors ? authors.join(', ') : null;

    let description = this.props.result.description;
    description = description ? description.substring(0,300)+'...' : null;

    let thumbnail = this.props.result.imageLinks;
    thumbnail = thumbnail ? thumbnail.smallThumbnail : null;

    return (
      <div className="search-result row">
        <div className="col-sm-2">
          <img src={thumbnail} className="img-rounded"></img>
        </div>
        <div className="col-sm-10">
          <h4 className="title">{title}</h4>
          <h5 className="authors text-muted">{authors}</h5>
          <p>{description}</p>
          <AddButton token={this.props.token} addBook={this.props.addBook} book={this.props.result} />
        </div>
      </div>
    )
  }
}

export default BookItem;
