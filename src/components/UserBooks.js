import React from 'react';
import UserBook from './UserBooks'

const UserBooks = (props) => {
    console.log(props.user.books.map(book => book.title))
    return ( 
        <>
        {/* {props.user.books ? 
        <div> */}
            {/* <ul>
            {props.user.books.map(book => 
                <li><UserBook key={book.id + Math.random()} book={book} user={props.user}/></li>
            )}
            </ul> */}
        {/* </div>
        : null}
        <p>UserBooks</p> */}
        <div className="wishlist-container">
            <ul>
                <li>Here's one thing</li>
                <li>Here's another thing</li>
                <li>Here's one thing</li>
                <li>Here's another thing</li>
            </ul>
        </div>
        </>
        );
}
 
export default UserBooks;