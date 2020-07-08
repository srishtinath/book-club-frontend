import React, { Component } from 'react';
import UserContainer from './UserContainer';
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
        console.log(this.state.users)
        return ( 
            <div className="profile">
                <UserContainer users={this.state.users}/>
                {/* <CurrentBook /> */}
            </div>
         );
    }
}
 
export default UserHome;