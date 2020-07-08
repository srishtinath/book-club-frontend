import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 

        let {name, image}= this.props.user

        return ( 
            <div onClick={this.handle} className="profile-container">
            <p className="user-name">
                {name}
            </p>
            <div className="user-photo-container">
                <img className="user-photo" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
            </div>
            <ul>
                Clubs
                {this.props.user.clubs.map(club => {
                    return <li>{club.name}</li>
                })}
            </ul>
            </div>
         );
    }
}
 
export default Profile;