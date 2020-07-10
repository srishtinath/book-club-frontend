import React from 'react';
import Profile from './Profile'

const UserContainer = (props) => {
    console.log(props)
    return ( 
        <div>
        {/* { props.users.map(user =>  */}
        {
            props.user ?
            <Profile key={props.user.id} user={props.user} />
            :
            null
        }
        {/* )} */}
        </div>
     );
}
 
export default UserContainer;