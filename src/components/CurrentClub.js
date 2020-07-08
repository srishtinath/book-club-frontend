import React, { Component } from 'react';

class CurrentClub extends Component {
    
    state = {
        showMembers: false
    }

    toggleMembers = () => {
        this.setState({
            showMembers: !this.state.showMembers
        })
    }
    handleDelete = () => {
        fetch(`http://localhost:3000/clubs/${this.props.club.id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(deletedClub => {
            this.props.deleteClub(deletedClub)
        })
    }

    findActiveBook = () => {
        console.log(this.props.club.book_clubs)
        let activeBookEntry = this.props.club.book_clubs.find(entry => entry["active?"] === true)
        let activeBook = this.props.club.books.find(book => book.id === activeBookEntry.book_id)
        return activeBook
    }

    findPastBooks = () => {
        let activeBookEntry = this.props.club.book_clubs.find(entry => entry["active?"] === true)
        let inactiveBooks = this.props.club.books.filter(book => book.id !== activeBookEntry.book_id)
        return inactiveBooks
    }

    render() { 
        let { name, image, completed, meeting, users, books, user_clubs } = this.props.club

        return ( 
            <div className="current-club-container">
                <div className="club-title"><h1>{name}</h1></div>
                <div className="club-info">
                <img src={image} alt={name} className="club-picture"/>
                </div>
                {/* Members: Progress on left below picture */}
                
                <div className="book-info">
                    <h4>Current book: {this.findActiveBook(books).title}</h4>
                        
                    <h4 align="center">Past books read</h4>
                    <ul>
                    {this.findPastBooks().map(book =>
                        <li>{book.title}</li>
                        )}
                        </ul>
                        <br></br><button>Choose Book</button>
                </div>

                <div className="user-info">
                <p> {users ? `Number of members: ${users.length}` : null}</p>
                <ul>
                    {users.map(user => 
                        <li>{user.name} Progress: {user_clubs[0].progress} </li>
                        )}
                </ul>
                <button onClick={this.toggleMembers}>Add Members</button>
                <div className="add-members">
                    {this.state.showMembers ? 
                    this.props.users.map(user => 
                        <p>{user.name}</p>
                        )
                        :
                        null}
                </div>

                <p>{meeting ? `Next meeting: ${meeting}` : null}</p>
                </div>
                <div className="delete-club">
                <button onClick={this.handleDelete}>Delete Club</button>
                </div>
            </div>
         );
    }
}
 
export default CurrentClub;