import React, { Component } from 'react';
import ClubList from "./ClubList";
import CurrentClub from "./CurrentClub";

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
        currentClub: {}
    }
    

    onClubClick = (selectedClubObject) => {
        this.setState({
            currentClub: selectedClubObject
        })
    }

    render() { 
        return ( 
            <div className="clubs">
                <div className="clubs-container">
                    <ClubList clubs={this.state.clubs} onClubClick={this.onClubClick}/>
                </div>
                <div className="selected-club">
                    <CurrentClub club={this.state.currentClub}/>
                </div>
            </div>
         );
    }
}
 
export default MyClubs;