import React, { Component } from 'react';
import CurrentBook from './CurrentBook';
import ChooseBook from './ChooseBook';

class CurrentClub extends Component {
    
    state = {
        showMembers: false,
        users: [],
        books: [],
        activeBook: {},
        chooseBook: false
    }

    componentDidMount(){
        fetch("http://localhost:3000/books")
        .then(r => r.json())
        .then(fetchedBooks => {
            this.setState({
                books: fetchedBooks
            }, this.findActiveBook(this.props.club))
        })
        
    }

    componentDidUpdate(prevProps){
        if (this.props.club !== prevProps.club){
            this.findActiveBook(this.props.club)
        }
        
    }

    toggleMembers = () => {
        this.setState({
            showMembers: !this.state.showMembers
        })
    }
    
    chooseBook = () => {
        this.setState({
            chooseBook: !this.state.chooseBook
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

    findActiveBook = (club) => {
        // console.log(this.props.club.book_clubs)
        if (club.book_clubs){
            let activeBookEntry = club.book_clubs.find(entry => entry["active?"] === true)
            let activeBookFound = club.books.find(book => book.id === activeBookEntry.book_id)
            this.setState({
                activeBook: activeBookFound,
                chooseBook: false
            })
        } else {
            return null
        }
    }

    findPastBooks = () => {
        if (this.props.club.book_clubs){
            let activeBookEntry = this.props.club.book_clubs.find(entry => entry["active?"] === true)
            let inactiveBooks = this.props.club.books.filter(book => book.id !== activeBookEntry.book_id)
            return inactiveBooks
        } else {
            return null
        }
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

    findProgress = (user) => {
        let userClubs = this.props.club.user_clubs
        if (userClubs){
            let userClubEntry = userClubs.find(entry => entry.user_id === user.id)
            if (userClubEntry){
                return userClubEntry.progress
            }
        } else {
            return "0"
        }
    }
    
    closeMembers = () => {
        this.setState({
            showMembers: false
        })
    }

    addActiveBook = (bookFromChild) => {
        this.setState({
            activeBook: bookFromChild
        })
    }

    render() { 
        let { name, image, meeting, users } = this.props.club
        console.log(this.props.club.user_clubs)
        return ( 
            <div className="current-club-container">
                <div className="club-title"><h1>{name}</h1></div>
                <div className="club-info">
                <img src={image} alt={name} className="club-picture"/>
                </div>
                

                <div className="user-info">
                    <p> {users ? `Number of members: ${users.length}` : null}</p>
                    <ul>
                        {users.map(user => 
                            <li key={user.id + Math.random()}>{user.name} Progress: {this.findProgress(user) ? this.findProgress(user) : 0} </li>
                            )}
                    </ul>
                    <button onClick={this.toggleMembers} className="button">Add Members
                    <div class="button__horizontal"></div>
                    <div class="button__vertical"></div>
                    </button>
                
                    {this.state.showMembers 
                    ? 
                    <div className="modal">
                        <div className="modal-content">
                            <div className="modal-text">
                                <span className="close" onClick={this.closeMembers}>×</span>
                                <ul>
                                {this.props.users.map(user => 
                                <li>{user.name}
                                <button className="button" 
                                onClick={() => this.addMember(user)}
                                disabled={!this.memberInClub(user.id)}> 
                                { this.memberInClub(user.id) ? "Add!" : "Added to club" }
                                <div class="button__horizontal"></div>
                                <div class="button__vertical"></div>
                                </button>
                                </li>
                                )}
                                </ul>
                            </div>
                        </div>
                    </div>
                    :
                        null
                    }
                        
                    <p>{meeting ? `Next meeting: ${meeting}` : null}</p>
                    <div className="delete-club">
                    <button onClick={this.handleDelete} className="button">Delete Club</button>
                    <div class="button__horizontal"></div>
                    <div class="button__vertical"></div>
                    </div>
                </div>

                <div className="book-info">
                    <button onClick={this.chooseBook} className="button">Choose Current Book!<div class="button__horizontal"></div>
                    <div class="button__vertical"></div></button>
                        <CurrentBook activeBook={this.state.activeBook}/>
                        {this.state.chooseBook ? 
                        < ChooseBook books={this.state.books} club={this.props.club} addActiveBook={this.addActiveBook} hideBookForm={this.chooseBook}/>
                        :
                        null
                        }
                    
                    <h4 align="center">Past books read</h4>
                    {this.findPastBooks() ? 
                    <ul>
                        {this.findPastBooks().map(book =>
                            <li key={book.id}>{book ? book.title : null}</li>
                        )}
                    </ul>
                     :
                     null
                     }
                        
                </div>
            </div>
         );
    }
}
 
export default CurrentClub;