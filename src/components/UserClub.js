
import React, { Component } from 'react';

class UserClub extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            toggleUpdate: false,
            userClubProgress: this.findProgress(),
            club: {},
            activeBook: {}
         }
    }

    componentDidMount(){
        fetch(`http://localhost:3000/clubs/${this.props.club.id}`)
        .then(r => r.json())
        .then(fetchedClub => {
            this.setState({
                club: fetchedClub
            }, this.findActiveBook(fetchedClub))
        })
    }


    findActiveBook = (club) => {
        let activeBookEntry 
        let activeBookFound
        if (club.book_clubs) {
            activeBookEntry = club.book_clubs.find(entry => entry["active?"] === true)
            activeBookFound = club.books.find(book => book.id === activeBookEntry.book_id)
            this.setState({
                activeBook: activeBookFound
            })
        }
    }

    findProgress = () => {
        let clubProgress = this.props.user.user_clubs.find((user_club) => {
            return this.props.club.id === user_club.club_id
        })
            return clubProgress.progress
    }
    
    handleUpdate = (e) => {
        this.setState((prevState) => {
            return {
                toggleUpdate: !prevState.toggleUpdate
                }
            })
    }

    handleInput = (e) => {
        this.setState({
            userClubProgress: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault() 

        let userClub = this.props.user.user_clubs.find(user_clubs => {
            return this.props.club.id === user_clubs.club_id
        })

        fetch(`http://localhost:3000/user_clubs/${userClub.id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({
                progress: this.state.userClubProgress
            })
        })
    }

    

    render() {
        
        let {name, image, meeting} = this.props.club

        return (
            <div className="userclub-container">
                <img className="userclub-img" src={image} alt={name}></img>
                <div className="user-club-div">
                    <b>{name}</b>
                    <br></br>Currently Reading: {this.state.activeBook.title}
                    <br></br>Meeting Date: {meeting}
                    <br></br>Progress in Book: {this.state.userClubProgress}
                    </div>
                <div>
                <br></br><button onClick={this.handleUpdate} className="button">{this.state.toggleUpdate ? "Hide" : "Update Progress"}
                <div class="button__horizontal"></div>
                    <div class="button__vertical"></div></button>
                    <br></br>
                    {this.state.toggleUpdate ? 
                    <form className="update-progress-form" onSubmit={this.handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Number 1 - 10"
                            value={this.state.userClubProgress}
                            onChange={this.handleInput}/>
                        <input 
                            type="submit" 
                            value="save"/>
                    </form>
                    : 
                    null} 
            </div>
                </div>
          );
    }}
 
export default UserClub;