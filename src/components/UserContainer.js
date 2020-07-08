import React from 'react';
import Profile from './Profile'

const UserContainer = (props) => {
    return ( 
        <div>
        { props.users.map(user => 
            <Profile key={user.id} user={user} />
        )}
        </div>
     );
}
 
export default UserContainer;