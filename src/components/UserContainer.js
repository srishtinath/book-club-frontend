import React from 'react';
import Profile from './Profile'

const UserContainer = (props) => {
    return ( 
        <div>
        {
            props.user ?
            <Profile key={props.user.id} user={props.user} />
            :
            null
        }
        </div>
     );
}
 
export default UserContainer;