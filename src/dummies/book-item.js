import React, { Component } from 'react';

class BookItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.action,
      disabled: false
    }
  }

  handleClick(event) {
    this.props.bookAction()
    this.setState({
      text: this.props.afterAction,
      disabled: true
    })
  }

  render() {
    let title = this.props.book.title;
    title = title ? title.substring(0,100) : null;
    title = title.length > 99 ? title+'...' : title;

    let authors = this.props.book.authors;
    authors = authors ? authors.join(', ') : null;

    let thumbnail = this.props.book.thumbnail;
    thumbnail = thumbnail ? thumbnail : null;

    const disabled = this.state.disabled ? "disabled" : "";

    return (
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
          <div className="thumbnail book-item">
            <img className="article-image" src={thumbnail} alt={title}></img>
            <div className="caption">
              <h3 className="article-header">{title}</h3>
              <p className="source">{authors}</p>
              {this.props.isAuthenticated &&
                <button onClick={this.handleClick.bind(this)} className={"btn btn-xl btn-block "+disabled} disabled={this.state.disabled}>{this.state.text}</button>
              }
          </div>
        </div>
      </div>
    )
  }
}

export default BookItem
