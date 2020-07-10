import React, { Component } from 'react';
import UserClub from './UserClub'

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
       
        }
    }

    render() { 

        return (
        
            <div>
            {this.props.users[0] ? 
            
            <div className="top-container">
                <div className="profile-container">
                    <p className="user-name">
                        {this.props.users[0].name}'s
                        Profile
                    </p>
                    <div className="user-photo-container">
                        <img className="user-photo" src={this.props.users[0].image} />
                    </div>
                </div>
                    
                <div className="user-club-list-container">
                    {this.props.users[0].clubs.map(club => {
                    return  <div className="user-club-div">
                        <UserClub user={this.props.users[0]} key={club.id} club={club}/>
                        </div>
                    })}
                </div>
                </div>
                    : null}  
            </div>
         );
    }
}
 
export default Profile;

