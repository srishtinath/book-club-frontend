import React, { Component } from 'react';

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
        .then( this.props.memberAdded(user))
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

    render() { 
        let { club, users, listOfUsers } = this.props
        return ( 
            <div>
            <p>Add Members to { club.name }!</p>
            <ul>
                {listOfUsers.map(user => 
                    <li>{user.name}
                    <button className="add-member-btn" 
                    onClick={() => this.addMember(user)}
                    disabled={!this.memberInClub(user.id)}> 
                    { this.memberInClub(user.id) ? "Add!" : "Added to club" }
                    </button>
                    </li>
                )}
            </ul>
            </div>
         );
    }
}
 
export default AddMember;