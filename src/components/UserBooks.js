import React from 'react';
import UserBook from './UserBooks'

const UserBooks = (props) => {
    // console.log(props.user.books.map(book => book.title))

    let goToBooksList = () => {
        props.goToWishlist()
    }

    console.log(props.user.books)
    return ( 
        <>
        <div >
            <h2 align="center">My Wishlist</h2>
            <ul className="wishlist-container">
                <div className="scroll-box">
                <li> <button className="button" onClick={goToBooksList}>Add more items...
                <div class="button__horizontal"></div>
                    <div class="button__vertical"></div></button></li>

                {props.user.books.map(book => {
                    return <li key={book.id + Math.random()} className="wishlist-item">
                        <img src={book.image} alt={book.title}></img>
                        <br></br>
                        {book.title}
                    </li>
                })}
                </div>
            </ul>
        </div>
        </>
        );
}
 
export default UserBooks;