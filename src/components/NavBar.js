import React, { Component } from 'react';
import { NavLink } from "react-router-dom"; 
import BookWormsLogo from '../images/Bookwormslogo.png'


class NavBar extends Component {

    render() { 
        return ( 
            <div className="navbar">
                {/* Welcome! */}
                <ul className="navbar-ul">
                    {this.props.token ?
                    <>
                    <NavLink to="/home" user={this.props.user}><li>Home</li></NavLink>
                    <NavLink to="/clubs" user={this.props.user}><li>Clubs</li></NavLink>
                    <NavLink to="/books" user={this.props.user}><li>Books</li></NavLink>
                    <li><button onClick={this.props.logoutUser}>Logout</button></li>
                    </>
                :
                    <>
                    <NavLink to="/login"><li>Login</li></NavLink>
                    <NavLink to="/register"><li>Register</li></NavLink>
                    </>
                }
                    
                    
                </ul>
                <div className="logo-container">
                    <img src={BookWormsLogo} className="logo" alt="bookworm-logo"/>
                </div>
            </div>
         );
    }
}
 
export default NavBar;
