import React, { Component } from 'react';

class CurrentClub extends Component {
    
    render() { 
        let { name, members, currentlyReading, nextMeeting } = this.props.club

        return ( 
            <div>
                <h1 align="center">{name}</h1>
                <p>Currently Reading: {currentlyReading}</p>
                <p>Number of members: {members}</p>
                <p>Progress</p>
                <p>Next meeting: {nextMeeting}</p>
            </div>
         );
    }
}
 
export default CurrentClub;

// clubs: [
//     {name: "Fantasy Book Club", members: 8, currentlyReading: "Pride and Prejudice", nextMeeting: "09/27/2020"},
//     {name: "Fiction Book Club", members: 12, currentlyReading: "Sense and Sensibility", nextMeeting: "12/06/2020"},
//     {name: "Romance Book Club", members: 4, currentlyReading: "Mansfield Park", nextMeeting: "11/18/2020"}
// ],