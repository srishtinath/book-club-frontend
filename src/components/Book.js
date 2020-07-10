import React, { Component } from 'react';


class Book extends Component {

    state = {
        onWishlist: false
    }

    componentDidMount(){
            this.checkOnWishlist()
    }

    componentDidUpdate(prevProps){
        if (this.props !== prevProps){
            this.checkOnWishlist()
        }
    }

    addToWishlist = () => {
        fetch("http://localhost:3000/user_books", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json",
                "Authorization": localStorage.token
            },
            body: JSON.stringify({
                book_id: this.props.book.id,
                user_id: this.props.user.id,
                "read?": false
            })
        })
        .then( r => r.json())
        .then(newEntry => {
            let newBookId = newEntry.book_id
            this.props.addToWishlist(newBookId)
        })
    }

    checkOnWishlist = () => {
        let user = this.props.user
        if (user.books) {
            let existingBook = user.books.find(book => book.id === this.props.book.id)
            if (existingBook) {
                this.setState({
                    onWishlist: true
                })
            }
        }  
        
    }

    render() { 
        let { title, author, image, genre, rating, description } = this.props.book
        // console.log(this.props)
        return ( 
                <div className="book-card">
                    <div className="overlay">
                        <div>{ description } 
                            <p></p>
                            <div>
                                <button className="add-wishlist" 
                                onClick={this.addToWishlist}
                                disabled={this.state.onWishlist}> 
                                { this.state.onWishlist ? "Added!" : "Add to Wishlist" }
                                </button>
                            </div>
                        </div>
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