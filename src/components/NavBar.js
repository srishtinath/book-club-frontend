import React, { Component } from 'react';
import { NavLink } from "react-router-dom"; 


import WormPic5 from "../images/WormPic5.png";
import WormPic4 from "../images/WormPic4.png";


class NavBar extends Component {

    state = {
        toggleImage: true
    }

    imageClick = () => {
        this.setState({
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
                    </>
                :
                    <>
                    <NavLink to="/login"><li>Login</li></NavLink>
                    <NavLink to="/register"><li>Register</li></NavLink>
                    </>
                }
                    
                    
                </ul>
                {this.props.token ? 
                <button onClick={this.props.logoutUser} className="button logout">Logout
                    <div className="button__horizontal"></div>
                    <div className="button__vertical"></div></button>

                    : null
                }
                <div className="body-logo-container">
                    <img 
                    src={this.state.toggleImage ? WormPic5 : WormPic4} 
                    onMouseOver={this.imageClick} 
                    className="body-logo" 
                    alt="worm-logo"/>
                </div>
            </div>
         );
    }
}
 
export default NavBar;
