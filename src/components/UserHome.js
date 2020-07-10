import React, { Component } from 'react';
import Profile from './Profile';
import UserBooks from "./UserBooks";

class UserHome extends Component {
 
        state = { 
            user: {}
         }

    componentDidMount() {
        this.setState({
            user: this.props.user
        })
    }

    render() { 
        return ( 
            <div className="profile">
                <Profile users={this.state.users}/>
                <UserBooks users={this.state.users}/>
            </div>
         );
    }
}
 
export default UserHome;