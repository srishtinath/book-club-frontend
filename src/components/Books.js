import React, { Component } from 'react';
import BookList from './BookList';
import BookSearch from "./BookSearch";

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <BookSearch />
            <BookList />
            </div>
         );
    }
}
 
export default Books;