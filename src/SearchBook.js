import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";

class SearchBook extends Component {
  state = {
    query: ''
  }
  clearQuery(){
    this.setState({query: ''})
  }
  UpdateQuery = (query) => {
    this.setState({ query: query.trim()})
  }
  render(){
    const {query} = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event)=>this.UpdateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    )
  }
}

export default SearchBook