import React, { Component } from 'react';

class BookSearch extends Component {
    
    render() { 
        return ( 
            <div className="search-bar">
                <input 
                    className="book-search-input"
                    type="text" 
                    placeholder="Search for a title or genre..." 
                    value={this.props.search} 
                    onChange={(e) => this.props.handleSearch(e.target.value)}/>
            </div>
         );
    }
}
 
export default BookSearch;