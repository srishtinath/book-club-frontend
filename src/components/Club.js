import React, { Component } from 'react';

class Club extends Component {
    
    handleClick = (event) => {
        this.props.onClubClick(this.props.club)
    }

    render() { 
        return ( 
            <div className="club-card" onClick={this.handleClick}>
                {this.props.club.name}
            </div>
         );
    }
}
 
export default Club;