import React from 'react';
import Book from "./Book";

const BookList = (props) => {
    return (
        <div className="books-container">
        { props.books.map(book => 
            <Book key={book.id} book={book} addToWishlist={props.addToWishlist} user={props.user}/>)}
        </div>
    )
}
 
export default BookList;