import React, { Component } from 'react';
import BookList from './BookList';
import BookSearch from "./BookSearch";

class Books extends Component {
    
    state = {
        books: [
            {id: 1, title: "Pride and Prejudice", author: "Jane Austen"},
            {id: 2, title: "Sense and Sensibility", author: "Jane Austen"},
            {id: 3, title: "Mansfield Park", author: "Jane Austen"},
        ],
        search: ""
    }

    // componentDidMount(){
    //     fetch("url")
    //     .then (r => r.json())
    //     .then(fetchedBooks => 
    //         this.setState({
    //             books: fetchedBooks
    //         }))
    // }

    sendBooks = () => {
        return this.state.books
    }

    handleSearch = (valueFromChild) => {
        this.setState({
            search: valueFromChild
        })
    }
    
    render() { 
        // console.log(this.state.search)
        return ( 
            <div className="books">
                <div className="search-bar"><BookSearch search={this.state.search} handleSearch={this.handleSearch}/></div>
                <BookList books={this.sendBooks()} />
            </div>
         );
    }
}
 
export default Books;