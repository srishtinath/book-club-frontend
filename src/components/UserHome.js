import React from 'react';
import Profile from './Profile';
import UserBooks from './UserBooks';

const UserHome = (props) => {
    return ( 
        <div>
            {props.user ? 
            <div className="userhome-container">
                <Profile user={props.user}/>
                <UserBooks user={props.user}/>
            </div>
            :
            null
            }
        </div>
     );
}
 
export default UserHome;