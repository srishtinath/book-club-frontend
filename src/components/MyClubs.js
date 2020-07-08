import React, { Component } from 'react';
import ClubList from "./ClubList";
import CurrentClub from "./CurrentClub";
import { NavLink } from 'react-router-dom';
import CreateClub from './CreateClub';

class MyClubs extends Component {
    
    state = {
        clubs: [],
        currentClub: {},
        users: [],
        displayClubList: true,
    }
    

    componentDidMount(){
        fetch("http://localhost:3000/clubs")
        .then(r => r.json())
        .then(fetchedClubs => {
            this.setState({
                clubs: fetchedClubs
            })
        })
        fetch("http://localhost:3000/users")
        .then(r => r.json())
        .then(fetchedUsers => {
            this.setState({
                users: fetchedUsers
            })
        })
    }

    onClubClick = (selectedClubObject) => {
        this.setState({
            currentClub: selectedClubObject
        })
    }

    addOneClub = (clubObject) => {
        let newClubArray = [...this.state.clubs, clubObject]
        this.setState({
            clubs: newClubArray
        })
    }

    addUserToClub = (user) => {
        this.setState
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
            clubs: newClubArray,
            currentClub: {}
        })
    }

    showClubForm = () => {
        this.setState({
            displayClubList: !this.state.displayClubList
        })
    }

    memberAdded = (newMember, club) => {
        let clubChanged = this.state.clubs.find(clubList => clubList.id === club.id)
        if (!clubChanged.users){
            clubChanged.users = []
        }
        clubChanged.users.push(newMember)
        let changedClubArray = this.state.clubs.filter(clubEntry => {
            if (clubEntry.id === clubChanged.id){
                return clubChanged
            } else {
                return clubEntry
            }
        })
        this.setState({
            clubs: changedClubArray
        })
    }

    seeDetailsOfNewClub = (club) => {
        this.setState({
            currentClub: club,
            displayClubList: true
        })
    }

    render() { 
        return ( 
            <div className="clubs">
                {this.state.displayClubList 
                ?
                <div className="clubs-content">
                    <div className="clubs-container">
                    <ClubList 
                    clubs={this.state.clubs} 
                    onClubClick={this.onClubClick}/>
                    </div>
                    <div className="selected-club">
                        {this.state.currentClub.name ? 
                        <CurrentClub 
                        club={this.state.currentClub} 
                        deleteClub={this.deleteClub} 
                        users={this.state.users}
                        memberAdded={this.memberAdded} 
                        />
                        : "Select club from the left!"
                    }
                    </div>
                </div>
                :
                <CreateClub 
                addOneClub={this.addOneClub} 
                users={this.state.users} 
                memberAdded={this.memberAdded} 
                seeDetailsOfNewClub={this.seeDetailsOfNewClub}/>
            }
            <button 
            className="add-a-club" 
            onClick={this.showClubForm}>
                {this.state.displayClubList ? "Add a club!" : "Back to club list"}
                </button>

            </div>
         );
    }
}
 
export default MyClubs;