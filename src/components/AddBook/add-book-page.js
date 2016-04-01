import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/book';
import config from '../../../config';
import axios from 'axios';

import SearchResults from './search-results';

class AddBookPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      search: '',
      searchResults: [],
      searching: false
    }
  }

  handleSearchChange(event) {
    const search = event.target.value;
    this.setState({ search: search })
  }

  search(search) {
    const query = encodeURIComponent(search);
    const googleBooksAPI = 'https://www.googleapis.com/books/v1/volumes?q=' + query + '&key=' + config.GOOGLE_BOOKS_KEY;

    axios.get(
      googleBooksAPI,
      {
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(response => {
        console.log(response.data.items)

        this.setState({
          searchResults: response.data.items,
          searching: false
        })
      })
      .catch(function(response) {
        console.log('Error!',response)
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ searching: true });
    this.search(this.state.search);
  }

  render() {
    return (
      <div className="add-book-page">
        <div className="col-sm-6">
        <h2 className="page-header">Add a book to your library</h2>
        <form className="form" role="form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="form-group">
            <div className="">
              <label className="sr-only">Keyword Search</label>
              <input type="text" className="form-control" placeholder="Enter title, author, or keyword" value={this.state.search} onChange={this.handleSearchChange.bind(this)} />
            </div>
          </div>
          <button type="submit" className="btn btn-info">Search</button>
        </form>
        {this.props.message &&
          <div>
            <div className="alert alert-danger" role="alert">{this.props.message}</div>
          </div>
        }
      </div>
      <div className="col-sm-12">
        <SearchResults searchResults={this.state.searchResults} searching={this.state.searching} addBook={this.props.addBook} token={this.props.token}/>
      </div>
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

export default connect(mapStateToProps, actions)(AddBookPage);
