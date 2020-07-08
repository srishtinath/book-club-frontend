import React, { Component } from 'react';

class Club extends Component {
    
    handleClick = (event) => {
        this.props.onClubClick(this.props.club)
    }

    render() { 
        return ( 
            <div className="club-card" onClick={this.handleClick}>
                {this.props.club.name}
                {this.props.club.users ? 
                <p>Number of members: {this.props.club.users.length} </p> :
                null
                }
            </div>
         );
    }
}
 
export default Club;