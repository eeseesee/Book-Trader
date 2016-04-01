import React, { Component } from 'react';

import BookItem from './book-item';

class SearchResults extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="search-results row">
        {this.props.searching ? <img className="search" src="/public/img/ajax-loader.gif"></img> : null}
        {this.props.searchResults.map((result) => {
          return (
            <div>
              <BookItem key={result.id} result={result.volumeInfo} token={this.props.token} addBook={this.props.addBook}/>
            </div>
          )
        })
      }
      </div>
    )
  }
}

export default SearchResults;
