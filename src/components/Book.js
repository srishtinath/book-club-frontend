import React, { Component } from 'react';


class Book extends Component {

    render() { 
        let { title, author, image, genre, rating, description } = this.props.book
        return ( 
            <div className="book-card">
                <div className="overlay">
                {/* <p className="description"> */}
                    <div>{ description } </div>
                    {/* </p> */}
                </div>
                <div className="underlay">
                    <img src={image} alt={title} className="book-image"/>
                    <b>{ title }</b>
                    <p>Author: { author }</p>
                    <p>Genre: { genre }</p>
                    <p>Rating: { rating }</p>
                </div>
            </div>
         );
    }
}
 
export default Book;