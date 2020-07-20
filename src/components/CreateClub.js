import React, { Component } from 'react';
import AddMember from "./AddMember";
import ClubForm from "./ClubForm";

class CreateClub extends Component {

    state = {
        displayForm: true,
        newClub: {},
        users: []
    }

    componentDidMount(){
        this.setState({
            users: this.props.users
        })
    }


    toggleDisplay = (newClubObject) => {
        this.setState({
            displayForm: false,
            newClub: newClubObject
        })
    }

    render() { 
        return ( 
            <div className="create-club-container">
                <div className="create-club-title">Create a Club!</div>

                <div className="create-club-content">
                    {this.state.displayForm 
                    ?
                    <ClubForm 
                    toggleDisplay={this.toggleDisplay} 
                    addOneClub={this.props.addOneClub}/>
                    :
                    <AddMember 
                    club={this.state.newClub} 
                    listOfUsers={this.props.users} 
                    users={this.state.users} 
                    addOneClub={this.props.addOneClub}
                    memberAdded={this.props.memberAdded} 
                    seeDetailsOfNewClub={this.props.seeDetailsOfNewClub}/>
                    }
                </div>
            </div>
         )
    }
}
 
export default CreateClub;