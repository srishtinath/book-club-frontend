import React, { Component } from 'react';
import Book from "./Book";

class BookList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
            <h3>BookList!</h3>
            <Book />
            </div>
         );
    }
}
 
export default BookList;