import React from 'react';
import Profile from './Profile';
import UserBooks from './UserBooks';

const UserHome = (props) => {
    return ( 
        <div>
            {props.user ? 
            <div className="userhome-container">
                <p className="user-name"> {props.user.name}'s Profile </p>
                <div className="profile-content">
                    <Profile user={props.user} clubs={props.clubs}/>
                    <UserBooks user={props.user} goToWishlist={props.goToWishlist}/>
                </div>
            </div>
            :
            null
            }
        </div>
     );
}
 
export default UserHome;