import React, { Component } from 'react';
import UserClub from './UserClub'

class Profile extends Component {
    
    state = {
        user: {},
        clubs: []
    }

    componentDidMount(){
        fetch("http://localhost:3000/clubs")
        .then(r => r.json())
        .then(fetchedClubs => 
            this.setState({
                clubs: fetchedClubs,
                user: this.props.user
        }))
    }

    render() { 

        return (
        
            <div>
                {this.props.user ? 
                <>
                    <div className="top-container">
                            <div className="user-photo-container">
                                <img className="user-photo" src={this.props.user.image} alt={this.state.user.id}/>
                                <h4>Kelly quotes</h4>
                            </div>
                    
                        
                            <div className="userclublist">
                                {/* <h4 align="center">Clubs</h4> */}
                                <div>
                                    {this.state.user.clubs ? 
                                    <ul className="user-club-list">
                                    {this.state.user.clubs.map(club => {
                                    return <li key={club.id} className="user-club-div">
                                        <UserClub user={this.state.user} key={club.id} club={club} clubs={this.state.clubs}/>
                                        </li>
                                    })}
                                    </ul>
                                    :
                                    null}
                                </div>
                            </div>
                        </div>
                </>
                        :
                        null
                    }
            </div>
         );
    }
}
 
export default Profile;

