import React, { Component } from 'react';

class CurrentClub extends Component {
    
    state = {
        showMembers: false,
        users: []
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


    addMember = (user) => {
        fetch("http://localhost:3000/user_clubs", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({
                club_id: this.props.club.id,
                user_id: user.id,
                progress: 0
            })
        })
        .then(r => r.json())
        .then( this.props.memberAdded(user, this.props.club))
    }

    memberInClub = (userId) => {
        if (this.props.club.users){
            let existingUser = this.props.club.users.find(user => user.id === userId)
            if (existingUser) {
                return false
            } else {
                return true
            }
        } else {
            return true
        }
    }
    
    render() { 
        let { name, image, completed, meeting, users, books, user_clubs } = this.props.club
        console.log(this.props.users)
        return ( 
            <div className="current-club-container">
                <div className="club-title"><h1>{name}</h1></div>
                <div className="club-info">
                <img src={image} alt={name} className="club-picture"/>
                </div>
                {/* Members: Progress on left below picture */}
                
                {/* <div className="book-info">
                    <h4>Current book: {this.findActiveBook() ? this.findActiveBook().title : null}</h4>
                        
                    <h4 align="center">Past books read</h4>
                    <ul>
                    {this.findPastBooks().map(book =>
                        <li>{book ? book.title : null}</li>
                        )}
                        </ul>
                        <br></br><button>Choose Book</button>
                </div> */}

                <div className="user-info">
                <p> {users ? `Number of members: ${users.length}` : null}</p>
                <ul>
                    {users.map(user => 
                        <li>{user.name} Progress: {user_clubs[0].progress} </li>
                        )}
                </ul>
                <button onClick={this.toggleMembers}>Add Members</button>
                    {this.state.showMembers 
                    ? 
                        <div className="add-members">
                            <ul>
                            {this.props.users.map(user => 
                            <li>{user.name}
                            <button className="add-member-btn" 
                            onClick={() => this.addMember(user)}
                            disabled={!this.memberInClub(user.id)}> 
                            { this.memberInClub(user.id) ? "Add!" : "Added to club" }
                            </button>
                            </li>
                            )}
                            </ul>
                        </div>

                    :
                        null
                    }
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