import React, { Component } from 'react';

class RequestItem extends Component {
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
      <div className="book-item">
        <div className="col-sm-12">
          <div className="thumbnail">
            <img src={thumbnail} alt={title}></img>
            <div className="caption">
              <h3 className="title">{title}</h3>
              <h4 className="author">{authors}</h4>
              {this.state.text &&
                <button onClick={this.handleClick.bind(this)} className={"btn btn-primary"+disabled} disabled={this.state.disabled}>{this.state.text}</button>
              }
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RequestItem
