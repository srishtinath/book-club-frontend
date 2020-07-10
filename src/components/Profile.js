import React, { Component } from 'react';

class Profile extends Component {
    
    state = {
        user: {}
    }

    componentDidMount(){
        this.setState({
            user: this.props.user
        })
    }

    render() { 

        // let {name, image}= this.props.user
        let {name}= this.state.user

        return ( 
            <div onClick={this.handle} className="profile-container">
            <p className="user-name">
                {name}
            </p>
            <div className="user-photo-container">
                <img className="user-photo" src="https://i.pinimg.com/originals/37/f2/f2/37f2f2ce0194098045d3df6dfd2df67b.jpg" alt={name}/>
            </div>
            <ul>
                Clubs
                {/* {this.props.user.clubs.map(club => 
                     <li>{club.name}</li>
                )} */}
            </ul>
            </div>
         );
    }
}
 
export default Profile;