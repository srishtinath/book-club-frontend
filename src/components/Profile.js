import React, { Component } from 'react';
import UserClub from './UserClub'

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

        return (
        
            <div>
                {this.props.user ? 
                <>
                    <p className="user-name"> {this.state.user.name}'s Profile </p>
                    <div className="top-container">
                        <div className="profile-container">
                            
                            <div className="user-photo-container">
                                <img className="user-photo" src={this.props.user.image} alt={this.state.user.id}/>
                            </div>
                    
                        
                            <h2 align="center">Clubs</h2>
                            <div className="user-club-list-container">
                                {this.state.user.clubs ? 
                                <div>
                                {this.state.user.clubs.map(club => {
                                return <div className="user-club-div"><UserClub user={this.state.user} key={club.id} club={club}/></div>
                                })}
                                </div>
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

