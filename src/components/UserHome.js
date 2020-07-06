import React, { Component } from 'react';
import Profile from './Profile';
import CurrentBook from "./CurrentBook";

class UserHome extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="profile">
                <Profile />
                <p></p>
                <CurrentBook />
                <p></p>
            </div>
         );
    }
}
 
export default UserHome;