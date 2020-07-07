import React, { Component } from 'react';
import { NavLink } from "react-router-dom"; 
import WormPic5 from "../images/WormPic5.png";
import WormPic4 from "../images/WormPic4.png";


class NavBar extends Component {
    state = {
        toggleImage: true
    }

    imageClick = (event) => {
        this.setState ({
            toggleImage: !this.state.toggleImage
        })
    }

    render() { 
        return ( 
            <div className="navbar">
                {/* Welcome! */}
                <ul className="navbar-ul">
                    <NavLink to="/home"><li>Home</li></NavLink>
                    <NavLink to="/clubs"><li>Clubs</li></NavLink>
                    <NavLink to="/books"><li>Books</li></NavLink>
                </ul>
                <div className="logo-container">
                <img src={this.state.toggleImage ? WormPic5 : WormPic4} onClick={this.imageClick} className="logo" alt="logo"/>
                </div>
            </div>
         );
    }
}
 
export default NavBar;
