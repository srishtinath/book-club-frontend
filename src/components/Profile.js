import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        }
    }


    //WHY cant I access this.props.users[0].name without doing a ternary to see if it exists first
    //GET HELPPP
    //continure with progress!!! 

    render() { 

        return ( 
            <div className="top-container">
            <div className="profile-container">
                <p className="user-name">
                    {this.props.users[0] ? this.props.users[0].name : null}'s
                    Profile
                </p>
                <div className="user-photo-container">
                    <img className="user-photo" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                </div>
                <div className="user-club-list-container">
                    <ul> My Clubs:
                    {this.props.users[0] 
                    ? 
                    this.props.users[0].clubs.map(club => {
                    return <li className="user-club-list">
                        <p>{club.name}</p>
                        <img src={club.image} alt={club.name}></img>
                        <p>Currently Reading: FIGURE THIS OUT</p>
                        <p>Progress in Book: (1-10)</p>
                        {/* <p>Progress in Book: {this.props.users[0] 
                                    ? this.props.users[0].user_clubs.find(user_club => {
                                        return club.id === user_club.club_id
                                    }) 
                                    : null} 
                                    (1-10) 
                                    <button>Update</button></p> */}
                    </li>
                    }): null}
                    </ul>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Profile;

