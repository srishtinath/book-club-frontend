import React, { Component } from 'react';


class Book extends Component {
    
    render() { 
        let { title, author } = this.props.book
        return ( 
            <div className="book-card">
                {/* On rollover --> book description */}
                {/* Image */}
                { title }
                <p>Author: { author }</p>
            </div>
         );
    }
}
 
export default Book;