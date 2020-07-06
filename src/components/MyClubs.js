import React, { Component } from 'react';
import ClubList from "./ClubList";
import CurrentClub from "./CurrentClub";

class MyClubs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div className="clubs-container">
                    <ClubList />
                </div>
                <div className="selected-club">
                    <CurrentClub />
                </div>
            </div>
         );
    }
}
 
export default MyClubs;