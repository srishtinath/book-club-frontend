import React, { Component } from 'react';
import ClubList from "./ClubList";
import CurrentClub from "./CurrentClub";
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
            clubs: changedClubArray,
            club: club
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
                        : 
                        <p>Select club from the left!</p>
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
                className="button add-club-btn" 
                onClick={this.showClubForm}>
                {this.state.displayClubList ? "Add a club!" : "Back to club list"}
                <div className="button__horizontal"></div>
                    <div className="button__vertical"></div>
                </button>

            </div>
         );
    }
}
 
export default MyClubs;