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
                "Authorization": localStorage.token
            },
            body: JSON.stringify({
                user_id: this.props.user.id,
                book_id: this.props.book.id,
                "read?": false
            })
        })
        .then( r => r.json())
        .then(fetchedBook => {
            this.props.addToWishlist(fetchedBook)
        })
    }

    checkOnWishlist = () => {
        let user = this.props.user
        if (user.books) {
            console.log(this.props)
            // debugger
            let existingBook = user.books.find(
                book => book.id 
                === this.props.book.id)
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
                        <div className="overlay-items">
                            <div>
                                { description } 
                                <p></p>
                            </div>
                            <div>
                                <button className="add-to-wishlist button" 
                                onClick={this.addToWishlist}
                                disabled={this.state.onWishlist}> 
                                { this.state.onWishlist ? "Added!" : "Add to Wishlist" }
                                <div className="button__horizontal"></div>
                                <div className="button__vertical"></div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="underlay">
                        <img src={image} alt={title} className="book-image"/>
                        <br></br>
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