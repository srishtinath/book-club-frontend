import React from 'react';
// import UserBook from './UserBooks'

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
            <div className="wishlist-container">
                <div className="wishlist-slide">
                <div className="scroll-box">
                    <button className="button add-items" onClick={goToBooksList}>Add more items...
                    <div className="button__horizontal"></div>
                    <div className="button__vertical"></div></button>
                    <ul className="wishlist-ul">
                    {props.user.books.map(book => {
                        return <li key={book.id + Math.random()} className="wishlist-item">
                            <img src={book.image} alt={book.title}></img>
                            <br></br>
                            {book.title}
                        </li>
                    })}
                    </ul>
                </div>
                </div>
            </div>
        </div>
        </>
        );
}
 
export default UserBooks;