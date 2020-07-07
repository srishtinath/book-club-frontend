import React, { Component } from 'react';

class Club extends Component {
    
    handleClick = (event) => {
        this.props.onClubClick(this.props.club)
    }

    render() { 
        let { name, members } = this.props.club
        return ( 
            <div className="club-card" onClick={this.handleClick}>
                {name}
                <p>Number of members: {members} </p>
                {/* <p>Currently Reading:  {currentlyReading}</p> */}
                {/* <p>Next meeting: {nextMeeting} </p> */}
            </div>
         );
    }
}
 
export default Club;

// clubs: [
//     {name: "Fantasy Book Club", members: 8, currentlyReading: "Pride and Prejudice", nextMeeting: "09/27/2020"},
//     {name: "Fantasy Book Club", members: 12, currentlyReading: "Sense and Sensibility", nextMeeting: "12/06/2020"},
//     {name: "Fantasy Book Club", members: 4, currentlyReading: "Mansfield Park", nextMeeting: "11/18/2020"}
// ],