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
                <img src={this.state.toggleImage ? WormPic5 : WormPic4} onClick={this.imageClick} className="logo" alt="logo"/>
                </div>
            </div>
         );
    }
}
 
export default NavBar;
