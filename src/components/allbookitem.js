import React, { Component } from 'react';

class AllBookItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="col-sm-4 col-md-3">
        <div className="thumbnail">
          <img src="http://placehold.it/242x200" alt="Placeholder"></img>
          <div className="caption">
            <h3>{this.props.book.title}</h3>
            <p>{this.props.book.author}</p>
            <button className="btn btn-primary">Request Book</button>
          </div>
        </div>
      </div>
    )
  }
}

export default AllBookItem;
