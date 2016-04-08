import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addBook } from '../actions/book';
import { externalSearch, clearSearch } from '../actions/external-search';
import spinning from '../styles/img/ajax-loader.gif';

import SearchItem from '../dummies/search-item';

class AddBookPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      searching: false
    }
  }

  handleSearchChange(event) {
    const search = event.target.value;
    this.setState({ search: search })
  }

  componentWillReceiveProps() {
    this.setState({
      searching: false
    })
  }

  componentWillUnmount() {
    this.props.clearSearch()
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ searching: true });
    this.props.externalSearch(this.state.search, this.props.token);
  }

  render() {
    return (
      <div className="add-book-page container">
        <div className="col-sm-6">
        <h2 className="page-header">Add a book to your library</h2>
        <form className="form" role="form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <div className="">
              <label className="sr-only">Keyword Search</label>
              <input type="text" className="form-control" placeholder="Enter title, author, or keyword" value={this.state.search} onChange={this.handleSearchChange.bind(this)} />
            </div>
          </div>
          <button type="submit" className="btn btn-xl">Search</button>
        </form>
      </div>
      <div className="col-sm-12">
        <div className="search-results row">
        {this.state.searching ? <img className="search" src={spinning}></img> : null}
        {this.props.searchResults.map((result) => {
          return <SearchItem key={result.id} result={result.volumeInfo} action={'Add Book'} bookAction={() => this.props.addBook(result.volumeInfo, this.props.token)} afterAction={'Added'} />
        })}
        </div>
      </div>
    </div>
    )
  }
}

AddBookPage.propTypes = {
  searchResults: PropTypes.array,
  token: PropTypes.string,
  addBook: PropTypes.func.isRequired,
  externalSearch: PropTypes.func.isRequired,
  clearSearch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    searchResults: state.searchResults,
    token: state.auth.token
   };
}

export default connect(mapStateToProps, { externalSearch, clearSearch, addBook })(AddBookPage);
