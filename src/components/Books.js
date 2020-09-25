import React, { Component } from 'react';
import BookList from './BookList';
import BookSearch from "./BookSearch";

class Books extends Component {
    
    state = {
        books: [],
        user: {},
        search: "",
    }

    componentDidMount(){
       fetch("http://localhost:3000/books")
       .then(r => r.json())
       .then(fetchedBooks => 
        this.setState({
            books: fetchedBooks,
            user: this.props.user
        })
       )
    }


    handleSearch = (valueFromChild) => {
        this.setState({
            search: valueFromChild
        }, this.filteredBookSearch)
    }

    filteredBookSearch = () => {
        let filteredBookArray = this.state.books
        filteredBookArray = this.state.books.filter((book) => {
            return (
                book.title.toLowerCase().includes(this.state.search.toLowerCase())
                ||
                book.genre.toLowerCase().includes(this.state.search.toLowerCase())
            )
        })
        return filteredBookArray
    }

    addToWishlist = (newBook) => {
        let currentUser = this.state.user
        let userBooks = currentUser.books
        let foundBook = this.state.books.find(book => book.id === newBook.id)
        if (!userBooks){
            userBooks = []
        }
        userBooks.push(foundBook)
        currentUser.books = userBooks
        this.setState({
            user: currentUser
        })
    }
    
    render() { 
        return ( 
            <div className="books">
                <div><BookSearch search={this.state.search} handleSearch={this.handleSearch}/></div>
                <BookList books={this.filteredBookSearch()} user={this.props.user} addToWishlist={this.addToWishlist}/>
            </div>
         );
    }
}
 
export default Books;