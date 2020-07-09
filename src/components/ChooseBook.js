import React, { Component } from 'react';

class ChooseBook extends Component {

    state = {
        chosenBookId: {}
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target)
        fetch("http://localhost:3000/book_clubs", {
            method: "POST", 
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({
                book_id: this.state.chosenBookId,
                club_id: this.props.club.id,
                "active?": true
            })
        })
        .then(r => r.json())
        .then( fetchedBook => {
            console.log(fetchedBook)
            this.props.addActiveBook(fetchedBook)
        })
    }

    handleChange = (e) => {
        this.setState({
            chosenBookId: e.target.parentNode.id
        })
    }

    render() { 
        console.log(this.state.chosenBookId)
        return ( 
            <form>
                <p>Choose Book!</p>
                    {this.props.books.map(bookObj => 
                        <span key={bookObj.id}>
                            <input type="radio" name="chosen-book" value={this.state.chosenBookId} onChange={this.handleChange}></input>
                            <label>{bookObj.title}</label>
                        </span>
                    
                    )}
                <input type="submit" onClick={this.handleSubmit}></input>
            </form>
         );
    }
}
 
export default ChooseBook;