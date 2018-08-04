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
      this.setState({books})
    })
  }
  render() {
    console.log(this.state.books)
    return (
      <div className="app">          
        <Route exact path='/' render={()=> <BookLibrary books={this.state.books}/>}/>
        <Route path='/search' render={ () => <SearchBook/> }/>
      </div>
    )
  }
}

export default BooksApp
