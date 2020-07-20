import React, { Component } from 'react';

class CurrentClubUserBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            memberInClub: false
          }
    }

    componentDidMount(){
        this.memberInClub()
    }

    componentDidUpdate(prevProps){
        if (this.props.club.users !== prevProps.club.users){
            this.memberInClub()
        }
    }

    memberInClub = () => {
        if (this.props.club.users){
            let existingUser = this.props.club.users.find(user => user.id === this.props.user.id)
            if (existingUser) {
                this.setState({
                    memberInClub: false
                })
            } else {
                this.setState({
                    memberInClub: true
                })
            }
        } else {
            this.setState({
                memberInClub: true
            })
        }
    }

    memberAdded = (user) => {
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
        .then( user => {
            this.props.memberAdded(user)
            this.setState({
                memberInClub: !this.state.memberInClub
            })
        })
    }

    render() { 
        return ( 
            <button className="simple-button" 
            onClick={() => this.memberAdded(this.props.user)}
            disabled={!this.state.memberInClub}> 
            { this.state.memberInClub ? "Add!" : "Added to club" }
            </button>
         );
    }
}
 
export default CurrentClubUserBook;