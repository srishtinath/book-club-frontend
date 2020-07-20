import React, { Component } from 'react';

class Club extends Component {
    
    handleClick = (event) => {
        this.props.onClubClick(this.props.club)
    }

    render() { 
        // console.log(this.props.club)
        return ( 
            <div className="club-card" onClick={this.handleClick}>
                {this.props.club.name}
                {/* {this.props.club ? 
                <p>Number of members: {this.props.club.users_count} </p> 
                :
                <p>Number of members: 0 </p>
                } */}
            </div>
         );
    }
}
 
export default Club;