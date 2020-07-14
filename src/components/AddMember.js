import React, { Component } from 'react';
import { NavLink } from "react-router-dom"; 


class AddMember extends Component {
    

    addMember = (user) => {
        fetch("http://localhost:3000/user_clubs", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify({
                club_id: this.props.club.id,
                user_id: user.id,
                progress: 0
            })
        })
        .then(r => r.json())
        .then( this.props.memberAdded(user, this.props.club))
    }

    memberInClub = (userId) => {
        if (this.props.club.users){
            let existingUser = this.props.club.users.find(user => user.id === userId)
            if (existingUser) {
                return false
            } else {
                return true
            }
        } else {
            return true
        }
        
    }

    seeDetailsOfNewClub = () => {
        this.props.seeDetailsOfNewClub(this.props.club)
    }
    


    render() { 
        let { club, listOfUsers } = this.props
        return ( 
            <div>
            <p>Add Members to { club.name }!</p>
            <ul>
                {listOfUsers.map(user => 
                    <li key={user.id}>{user.name}
                    <button className="button"  
                    onClick={() => this.addMember(user)}
                    disabled={!this.memberInClub(user.id)}> 
                    { this.memberInClub(user.id) ? "Add!" : "Added to club" }
                    <div class="button__horizontal"></div>
                    <div class="button__vertical"></div>
                    </button>
                    </li>
                )}
            </ul>
            <NavLink to="/clubs"><button onClick={this.seeDetailsOfNewClub} className="button">See my new club!
                <div class="button__horizontal"></div>
                    <div class="button__vertical"></div>
                    </button></NavLink>
            </div>
         );
    }
}
 
export default AddMember;