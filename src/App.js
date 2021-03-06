import React, { Component } from 'react';
import {
  // BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

import NavBar from "./components/NavBar";
import UserHome from './components/UserHome';
import MyClubs from './components/MyClubs';
import Books from './components/Books';
import UserForm from './components/UserForm';
import GardenBookWorm from '../src/images/GardenBookWorm.png'


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
      image: "",
      quote: ""
    },
    token: "",
    clubs: []
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

    fetch("http://localhost:3000/clubs")
        .then(r => r.json())
        .then(fetchedClubs => {
            this.setState({
                clubs: fetchedClubs
            })
        })
  }
  
  handleLoginSubmit = (userInfo) => {
    console.log("Login form has been submitted")
    fetch("http://localhost:3000/users/login", {
            method: "POST",
            headers: {
                "content-type": "application/json",
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
      console.log(resp.message)
    } else {
      this.setState({
        user: resp.user,
        token: resp.token
      })
      localStorage.token = resp.token
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

  goToWishlist = () => {
    this.props.history.push("/books")
  }

  renderHome = (routerProps) => {
    if (this.state.token) {
      return <UserHome user={this.state.user} goToWishlist={this.goToWishlist} clubs={this.state.clubs}/>
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
    this.props.history.push('/home')
  }

  addOneClub = (clubObject) => {
    let newClubArray = [...this.state.clubs]
    newClubArray.push(clubObject)
    this.setState({
        clubs: newClubArray
    })
  }

  deleteClub = (clubObject) => {
    let deletedClub = this.state.clubs.find(club => club.id === clubObject.id)
    let newClubArray = this.state.clubs.filter(club => {
        if (club.id === deletedClub.id){
            return null 
        } else {
            return club
        }
    })
    this.setState({
        clubs: newClubArray
    })
}

  memberAdded = (newMember, club) => {    
    let clubChanged = this.state.clubs.find(clubList => clubList.id === club.id)
    console.log(clubChanged)
        if (!clubChanged.users){
            clubChanged.users = []
        }
        clubChanged.users.concat(newMember)
        let changedClubArray = this.state.clubs.filter(clubEntry => {
            if (clubEntry.id === clubChanged.id){
                return clubChanged
            } else {
                return clubEntry
            }
        })
        this.setState({
            clubs: changedClubArray,
        })
        return changedClubArray
  }

  render() { 
    // console.log(this.state)
    return ( 
      // <BrowserRouter >
      <>
          <div className="logo-container">
                    <img src={GardenBookWorm} className="logo" alt="bookworm-logo"/>
                </div>
          <nav>
            <NavBar token={this.state.token} logoutUser={this.logoutUser}/>
          </nav>

          <div className="body-content">
            <Switch>
              <Route path="/home" exact render={this.renderHome}/>
              <Route path="/clubs" exact render={() => <MyClubs user={this.state.user} 
                                                        memberAdded={this.memberAdded} 
                                                        newClubCreated={this.newClubCreated} 
                                                        addOneClub={this.addOneClub}
                                                        deleteClub={this.deleteClub}/>}/>
              <Route path="/books" exact render={() => <Books user={this.state.user} />}/>
              <Route path="/login" exact render={this.renderForm} />
              <Route path="/register" exact render={this.renderForm} />
              {/* <Route path="/logout" exact render={this.logoutUser} /> */}
              {/* <Route render={this.renderForm} /> */}
          </Switch>
          </div>
          </>
      // </BrowserRouter>
     )
  }
}
 

let MagicalComponent = withRouter(App)
export default MagicalComponent;