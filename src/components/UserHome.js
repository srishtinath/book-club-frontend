import React, { Component } from 'react';
import UserContainer from './UserContainer';
// import CurrentBook from "./CurrentBook";

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
        // console.log(this.state.users)
        return ( 
            <div className="profile">
                <UserContainer user={this.state.user}/>
                <p>User Home</p>
                {/* <CurrentBook /> */}
            </div>
         );
    }
}
 
export default UserHome;