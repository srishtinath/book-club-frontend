
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
        let activeBookFound
        if (club.current_book) {
            activeBookFound = club.books.find(book => book.id === club.current_book.book_id)
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
        this.setState({
            toggleUpdate: false
        })
    }

    render() {
        
        let {name, image, meeting} = this.props.club

        return (
            <div className="userclub-container">
                <img className="userclub-img" src={image} alt={name} style={{maxWidth:'30%'}}></img>
                <div className="user-club-div" style={{width:'80%'}}>
                    <b>{name}</b>
                    <br></br>Currently Reading: {this.state.activeBook.title}
                    <br></br>Meeting Date: {meeting}
                    <br></br>Progress in Book: {this.state.userClubProgress}
                    </div>
                <div>
                <br></br><button onClick={this.handleUpdate} className="button">{this.state.toggleUpdate ? "Hide" : "Update Progress"}
                <div className="button__horizontal"></div>
                    <div className="button__vertical"></div></button>
                    <br></br>
                    {this.state.toggleUpdate ? 
                    <form className="update-progress-form" onSubmit={this.handleSubmit} style={{width:'10%'}}>
                        <input 
                            type="text" 
                            placeholder="Number 1 - 10"
                            value={this.state.userClubProgress}
                            onChange={this.handleInput}/>
                            <button className="button">Submit
                            </button>
                    </form>
                    : 
                    null} 
            </div>
                </div>
          );
    }}
 
export default UserClub;