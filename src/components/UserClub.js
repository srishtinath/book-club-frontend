
import React, { Component } from 'react';

class UserClub extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            toggleUpdate: false,
            userClubProgress: this.findProgress(),
            clubs: [],
            activeBook: {}
         }
    }

    componentDidMount(){
        fetch("http://localhost:3000/clubs")
        .then(r => r.json())
        .then(fetchedClubs => {
            this.setState({
                clubs: fetchedClubs
            })
            this.findActiveBook()
        })
    }

    findActiveBook = () => {
        // //WANTS TO RETURN THE book_id that is active 
        // //maps over this.state.clubs.book_clubs to FIND the 
        // if (this.state.clubs) {
        //     let activeBookEntry = this.state.clubs.book_clubs.find(entry => entry["active?"] === true)
        // }
        //     // l
        // //     let activeBookFound = club.books.find(book => book.id === activeBookEntry.book_id)
        // //     this.setState({
        // //         activeBook: activeBookFound
        // //     })
        // // } else {
        // //     this.setState({
        // //         activeBook: {}
        // //     })
        // // }
        // console.log(activeBookEntry)
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
            <>
            <p><b>{name}</b></p>
            <img src={image} alt={name}></img>
            <p>Currently Reading: FIGURE THIS OUT</p>
            <p>Meeting Date: {meeting}</p>
        
            <p>Progress in Book: {this.state.userClubProgress}</p>
            <button onClick={this.handleUpdate}>{this.state.toggleUpdate ? "Hide" : "Update Progress"}</button>
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
                </>
          );
    }}
 
export default UserClub;