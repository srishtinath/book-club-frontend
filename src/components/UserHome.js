import React, { Component } from 'react';
<<<<<<< HEAD
import Profile from './Profile';
import CurrentBook from "./CurrentBook";
=======
import UserContainer from './UserContainer';
// import CurrentBook from "./CurrentBook";
>>>>>>> 30888d8f81025e4528cd0a5a603ddc60167ac057

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
<<<<<<< HEAD
=======
        // console.log(this.state.users)
>>>>>>> 30888d8f81025e4528cd0a5a603ddc60167ac057
        return ( 
            <div className="profile">
                <Profile users={this.state.users}/>
                {/* <CurrentBook /> */}
            </div>
         );
    }
}
 
export default UserHome;