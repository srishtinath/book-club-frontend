import React, { Component } from 'react';
import UserClub from './UserClub'

class Profile extends Component {
    
    state = {
        user: {},
        clubs: [],
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
                        {/* First entry */}
                            <div className="user-photo-container">
                                <div className="user-photo-content">
                                    <img className="user-photo" src={this.props.user.image} alt={this.state.user.id}/>
                                    <h4>{this.state.user.quote}</h4>
                                </div>
                            </div>
                    
                        
                            <div className="userclublist">
                                {/* Second entry */}
                                <div>
                                    {this.state.user.clubs ? 
                                    <ul className="user-club-list">
                                    {this.state.user.clubs.map(club => {
                                    return <li key={club.id + Math.random()} className="userclub-li">
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

