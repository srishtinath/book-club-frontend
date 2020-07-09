import React, { Component } from 'react';
import Profile from './Profile';
import CurrentBook from "./CurrentBook";

class UserHome extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users: []
         }
    }

    componentDidMount() {
        fetch("http://localhost:3000/users")
        .then(resp => resp.json())
        .then((userArray) => {
            this.setState({
                users: userArray
            })
        })
    }

    render() { 
        return ( 
            <div className="profile">
                <Profile users={this.state.users}/>
                {/* <CurrentBook /> */}
            </div>
         );
    }
}
 
export default UserHome;