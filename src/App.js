import React from 'react'
import { Route } from "react-router-dom";
import * as BooksAPI from './BooksAPI'
import  BookLibrary  from './BookLibrary';
import  SearchBook  from './SearchBook';
import './App.css'

class BooksApp extends React.Component {
  state= {
    books: []
  }
  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }
  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }
  render() {
    return (
      <div className="app">          
        <Route exact path='/' render={()=> <BookLibrary books={this.state.books} moveShelf={this.moveShelf} />}/>
        <Route path='/search' render={()=> <SearchBook moveShelf={this.moveShelf} books={this.state.books} /> }/>
      </div>
    )
  }
}

export default BooksApp
