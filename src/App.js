import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import NavBar from "./components/NavBar";
import UserHome from './components/UserHome';
import MyClubs from './components/MyClubs';
import Books from './components/Books';
import UserForm from './components/UserForm';


import WormPic5 from "../src/images/WormPic5.png";
import WormPic4 from "../src/images/WormPic4.png";

import { withRouter } from 'react-router-dom';

class App extends Component {

  state = {
    user: {
      id: 0,
      name: "",
      books: [],
      clubs: [],
      user_books: [],
      user_clubs: [],
      image: ""
    },
    token: "",
    toggleImage: true
  }

  componentDidMount(){
    if (localStorage.token){

      fetch("http://localhost:3000/users/stay_logged_in", {
        headers: {
          "Authorization": localStorage.token
        }
      })
      .then(r => r.json())
      .then(this.handleResponse)

    }
  }
  
  handleLoginSubmit = (userInfo) => {
    console.log("Login form has been submitted")
    fetch("http://localhost:3000/users/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
    .then(r => r.json())
    .then(this.handleResponse)
  }

  handleRegisterSubmit = (userInfo) => {
    console.log("Register form has been submitted")
    fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        .then(r => r.json())
        .then(this.handleResponse)
  }

  handleResponse = (resp) => {
    if (resp.message){
      alert(resp.message)
    } else {
      this.setState(resp)
      this.props.history.push("/home")
    }
  }

  renderForm = (routerProps) => {
    if (routerProps.location.pathname === "/login"){
      return <UserForm formName="Login Form" handleSubmit={this.handleLoginSubmit} history={this.props.history}/>
    } else if (routerProps.location.pathname === "/register"){
      return <UserForm formName="Register Form" handleSubmit={this.handleRegisterSubmit} history={this.props.history}/>
    } else {
      return <UserForm formName="Login Form" handleSubmit={this.handleLoginSubmit} history={this.props.history}/>
    }
  }

  renderHome = (routerProps) => {
    if (this.state.token) {
      return <UserHome user={this.state.user} />
    } else {
      this.props.history.push("/login")
      console.log("boo")
    }
  }

  logoutUser = (e) => {
    // e.preventDefault()
    localStorage.token = {}
    this.setState({
      user: {
        id: 0,
        name: "",
        books: [],
        clubs: [],
        user_books: [],
        user_clubs: [],
        image: ""
      },
      token: ""
    })
    // this.props.history.push('/home')
  }

  imageClick = (event) => {
      this.setState ({
          toggleImage: !this.state.toggleImage
      })
  }

  render() { 
    console.log(this.state)
    return ( 
      // <BrowserRouter >
      <div>
        <div className="body-logo-container">
          <img src={this.state.toggleImage ? WormPic5 : WormPic4} onClick={this.imageClick} className="body-logo" alt="worm-logo"/>
        </div>
        <div>
          <nav>
            <NavBar token={this.state.token} logoutUser={this.logoutUser}/>
          </nav>

          <div className="body-content">
            <Switch>
              <Route path="/home" exact render={this.renderHome} />
              <Route path="/clubs" exact render={() => <MyClubs user={this.state.user} />}/>
              <Route path="/books" exact render={() => <Books user={this.state.user} />}/>
              <Route path="/login" exact render={this.renderForm} />
              <Route path="/register" exact render={this.renderForm} />
              {/* <Route path="/logout" exact render={this.logoutUser} /> */}
              {/* <Route render={this.renderForm} /> */}
          </Switch>
          </div>
        </div>
      </div>
      // </BrowserRouter>
     )
  }
}
 

let MagicalComponent = withRouter(App)
export default MagicalComponent;