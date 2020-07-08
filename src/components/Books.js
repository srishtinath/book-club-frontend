import React, { Component } from 'react';
import BookList from './BookList';
import BookSearch from "./BookSearch";

class Books extends Component {
    
    state = {
        books: [
            // added genre to the books
            {id: 1, title: "Pride and Prejudice", author: "Jane Austen", genre: "Non-Fiction"},
            {id: 2, title: "Sense and Sensibility", author: "Jane Austen", genre: "Mystery"},
            {id: 3, title: "Mansfield Park", author: "Jane Austen", genre: "Fiction"},
        ],
        search: ""
    }

    componentDidMount(){
        fetch("http://localhost:3000/books")
        .then(r => r.json())
        .then(fetchedBooks => 
            this.setState({
                books: fetchedBooks
            }))
    }

    handleSearch = (valueFromChild) => {
        this.setState({
            search: valueFromChild
        })
    }

    //added the filter function
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
    
    render() { 
        // console.log(this.state.search)
        return ( 
            <div className="books">
                <div><BookSearch search={this.state.search} handleSearch={this.handleSearch}/></div>
                <BookList books={this.filteredBookSearch()} />
            </div>
         );
    }
}
 
export default Books;