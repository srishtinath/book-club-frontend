import React, { Component } from 'react';
import CurrentBook from './CurrentBook';
import ChooseBook from './ChooseBook';
import CurrentClubUserBook from './CurrentClubUserBook';

class CurrentClub extends Component {
    
    state = {
        showMembers: false,
        books: [],
        members: [],
        activeBook: {},
        chooseBook: false
    }

    componentDidMount(){
        fetch("http://localhost:3000/books")
        .then(r => r.json())
        .then(fetchedBooks => {
            if (this.props.club.current_book){
                let activeClubBook = fetchedBooks.find(book => book.id === this.props.club.current_book.book_id)
                this.setState({
                    books: fetchedBooks,
                    activeBook: activeClubBook,
                    members: this.props.members
                })

            } else {
                this.setState({
                    books: fetchedBooks
                })
            }
        })
        this.setState({
            members: this.props.members
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

    memberAdded = (newMember) => {
        let membersChanged = [...this.state.members]
        membersChanged.push(newMember)
        this.setState({
            members: membersChanged
        })
        this.props.memberAdded(newMember, this.props.club)
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
                    <p> { users ? `Number of members: ${users.length}` : null}</p>
                    <ul>
                        {users.map(member => 
                            <li key={member.id + Math.random()}>{member.name} Progress: {this.findProgress(member) ? this.findProgress(member) : 0} </li>
                            )}
                    </ul>
                    <button onClick={this.toggleMembers} className="button">Add Members
                    {/* <div class="button__horizontal"></div>
                    <div class="button__vertical"></div> */}
                    </button>
                
                    {this.state.showMembers 
                    ? 
                    <div className="modal">
                        <div className="modal-content">
                            <div className="modal-text">
                                <span className="close" onClick={this.closeMembers}>×</span>
                                <ul>
                                {this.props.users.map(user => 
                                <li key={user.id}>{user.name}
                                    <CurrentClubUserBook user={user} club={this.props.club} memberAdded={this.memberAdded}/>
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
                    {/* <div className="button__horizontal"></div> */}
                    {/* <div className="button__vertical"></div> */}
                    </div>
                </div>

                <div className="book-info">
                    <button onClick={this.chooseBook} className="button">Choose Current Book!
                    {/* <div className="button__horizontal"></div> */}
                    {/* <div className="button__vertical"></div> */}
                    </button>
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