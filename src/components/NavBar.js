import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class NavBar extends Component {
    
    render() { 
        return ( 
            <div className="navbar">
                <ul className="navbar-ul">
                    <NavLink to="/home"><li>Home</li></NavLink>
                    <NavLink to="/clubs"><li>Clubs</li></NavLink>
                    <NavLink to="/books"><li>Books</li></NavLink>
                </ul>
            </div>
         );
    }
}
 
export default NavBar;
