import React, { Component } from "react";
import * as BooksAPI from "./BooksAPI";
import { Link } from "react-router-dom";
import Book from './Book'

class SearchBook extends Component {
  state = {
    query: '',
    searchedBooks: []
  }
  UpdateQuery = (query) => {
    this.setState({
      query: query
    })
    this.updateSearchedBooks(query)
  }
  updateSearchedBooks = (query)=> {
    if (query) {
      BooksAPI.search(query).then((searchedBooks)=>{
        if (searchedBooks.error) {
          this.setState({searchedBooks: []})
        } else {
          this.setState({searchedBooks: searchedBooks})
        }
       
      })
    } else {
      this.setState({searchedBooks: []})
    }
  }
  render(){
    const {query, searchedBooks} = this.state
    
    
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="search"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.UpdateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchedBooks.map(searchedBook=>(
              <li key={searchedBook.id}>
                <Book book={searchedBook}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBook