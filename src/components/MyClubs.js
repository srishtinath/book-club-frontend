import React, { Component } from 'react';
import ClubList from "./ClubList";
import CurrentClub from "./CurrentClub";
import { NavLink } from 'react-router-dom';
import CreateClub from './CreateClub';

class MyClubs extends Component {
    
    state = {
        clubs: [
            {name: "Fantasy Book Club", members: 8, currentlyReading: "Pride and Prejudice", nextMeeting: "09/27/2020"},
            {name: "Fiction Book Club", members: 12, currentlyReading: "Sense and Sensibility", nextMeeting: "12/06/2020"},
            {name: "Romance Book Club", members: 4, currentlyReading: "Mansfield Park", nextMeeting: "11/18/2020"},
            {name: "Fantasy1 Book Club", members: 8, currentlyReading: "Pride and Prejudice", nextMeeting: "09/27/2020"},
            {name: "Fiction1 Book Club", members: 12, currentlyReading: "Sense and Sensibility", nextMeeting: "12/06/2020"},
            {name: "Romance1 Book Club", members: 4, currentlyReading: "Mansfield Park", nextMeeting: "11/18/2020"},
            {name: "Fantasy2 Book Club", members: 8, currentlyReading: "Pride and Prejudice", nextMeeting: "09/27/2020"},
            {name: "Fiction3 Book Club", members: 12, currentlyReading: "Sense and Sensibility", nextMeeting: "12/06/2020"},
            {name: "Romance3 Book Club", members: 4, currentlyReading: "Mansfield Park", nextMeeting: "11/18/2020"},
            {name: "Fantasy4 Book Club", members: 8, currentlyReading: "Pride and Prejudice", nextMeeting: "09/27/2020"},
            {name: "Fiction4 Book Club", members: 12, currentlyReading: "Sense and Sensibility", nextMeeting: "12/06/2020"},
            {name: "Romance4 Book Club", members: 4, currentlyReading: "Mansfield Park", nextMeeting: "11/18/2020"}
        ],
        currentClub: {},
        users: [],
        displayClubList: false,
    }
    

    componentDidMount(){
        fetch("http://localhost:3000/clubs")
        .then(r => r.json())
        .then(fetchedClubs => {
            this.setState({
                clubs: fetchedClubs
            })
        })
        fetch("http://localhost:3000/users")
        .then(r => r.json())
        .then(fetchedUsers => {
            this.setState({
                users: fetchedUsers
            })
        })
    }

    onClubClick = (selectedClubObject) => {
        this.setState({
            currentClub: selectedClubObject
        })
    }

    handleForm = (e) => {
        this.setState((prevState) => {
            return {
                display: !prevState.display
            }
        })
    }

    addOneClub = (clubObject) => {
        let newClubArray = [...this.state.clubs, clubObject]
        this.setState({
            clubs: newClubArray
        })
    }

    deleteClub = (clubObject) => {
        let deletedClub = this.state.clubs.find(club => club.id === clubObject.id)
        let newClubArray = this.state.clubs.filter(club => {
            if (club.id === deletedClub.id){
                return null 
            } else {
                return club
            }
        })
        this.setState({
            clubs: newClubArray,
            currentClub: {}
        })
    }

    render() { 
        return ( 
            <div className="clubs">
                {this.state.displayClubList 
                ?
                <div className="clubs-content">
                    <div className="clubs-container">
                    <ClubList clubs={this.state.clubs} onClubClick={this.onClubClick}/>
                    </div>
                    <div className="selected-club">
                        {this.state.currentClub.name ? 
                        <CurrentClub club={this.state.currentClub} deleteClub={this.deleteClub} users={this.state.users}/>
                        : "Select club from the left!"
                        }
                    </div>
                </div>
                :
                <CreateClub />
            }

            </div>
         );
    }
}
 
export default MyClubs;