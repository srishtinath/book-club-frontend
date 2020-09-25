import React, { Component } from 'react';
import UserClub from './UserClub'

class Profile extends Component {
    
    state = {
        user: {},
        clubs: [],
    }

    componentDidMount(){
        this.setState({
            clubs: this.props.clubs,
            user: this.props.user
        })
    }

    componentDidUpdate(prevProps){
        if (this.props !== prevProps){
            this.setState({
                clubs: this.props.user.clubs
            })
        }
    }

    render() { 

        return (
        
            <div>
                {this.props.user ? 
                <>
                    <div className="top-container">
                            <div className="user-photo-container">
                                <div className="user-photo-content">
                                    <img className="user-photo" src={this.props.user.image} alt={this.state.user.id}/>
                                    <h4>{this.state.user.quote}</h4>
                                </div>
                            </div>
                    
                        
                            <div className="userclublist">
                                <div>
                                    {this.state.user.clubs ? 
                                    <ul className="user-club-list" style={{listStyleType: 'none'}}>
                                    {this.state.user.clubs.map(club => {
                                    return <li key={club.id + Math.random()} className="userclub-li">
                                        <UserClub user={this.state.user} key={club.id} club={club} clubs={this.state.clubs}/>
                                        </li>
                                    })}
                                    </ul>
                                    :
                                   <p>You're not in any clubs! Join one by clicking the link on top!</p>}
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

