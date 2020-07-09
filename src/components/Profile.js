import React, { Component } from 'react';

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            
        }
    }


<<<<<<< HEAD
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
=======
        // let {name, image}= this.props.user
        let {name}= this.props.user

        return ( 
            <div onClick={this.handle} className="profile-container">
            <p className="user-name">
                {name}
            </p>
            <div className="user-photo-container">
                <img className="user-photo" src="https://i.pinimg.com/originals/37/f2/f2/37f2f2ce0194098045d3df6dfd2df67b.jpg" alt={name}/>
            </div>
            <ul>
                Clubs
                {this.props.user.clubs.map(club => 
                     <li>{club.name}</li>
                )}
            </ul>
>>>>>>> 30888d8f81025e4528cd0a5a603ddc60167ac057
            </div>
         );
    }
}
 
export default Profile;

