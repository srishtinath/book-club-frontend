import React from 'react';
import UserBook from './UserBooks'

const UserBooks = (props) => {
    // console.log(props.user.books.map(book => book.title))

    console.log(props.user.books)
    return ( 
        <>
        <div >
            <h2 align="center">My Wishlist</h2>
            <ul className="wishlist-container">
                <div className="scroll-box">
                {props.user.books.map(book => {
                    return <li key={book.id + Math.random()} className="wishlist-item">
                        <img src={book.image} alt={book.title}></img>
                        <br></br>
                        {book.title}
                    </li>
                })}
                <li> <button width="100px">Add more items...</button></li>
                </div>
            </ul>
        </div>
        </>
        );
}
 
export default UserBooks;