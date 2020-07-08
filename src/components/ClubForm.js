import React, { Component } from 'react';

class ClubForm extends Component {
    state = {
        name: "",
        image: "",
        meeting: "",
        toggleSubmit: true,
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        }, this.checkToggle)
    }

    checkToggle = () => {
        if (this.state.name && this.state.image && this.state.meeting){
            this.setState({
                toggleSubmit: false
            })
        }
    }


    handleSubmit= (event) => {
        event.preventDefault()
        // fetch("http://localhost:3000/clubs", {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json",
        //         "accept": "application/json"
        //     },
        //     body: JSON.stringify(this.state)
        // })
        // .then(r => r.json())
        // .then(newClub => {
        //     this.props.addOneClub(newClub)
        // })
        this.props.toggleDisplay()
    }

    render() { 
        return ( 
        <div className="create-club">
        <form onSubmit={this.handleSubmit}>
            <label>Name your club: </label>
            <input 
                type="text" 
                name="name" 
                placeholder="Club Name..."
                value={this.state.name}
                onChange={this.handleInput}
            />
            <p></p>
            <label>Give it an image: </label>
            <input 
                type="text" 
                name="image" 
                placeholder="Club Image..."
                value={this.state.image}
                onChange={this.handleInput}
            />
            <p></p>
            <label>When are you planning to meet? </label>
            <input 
                type="text" 
                name="meeting" 
                placeholder="Meeting Date (DD/MM/YYYY)"
                value={this.state.meeting}
                onChange={this.handleInput}
            />
        <p></p>
            <input type="submit" name="submit" value="Let's Read!" 
            disabled={this.state.toggleSubmit}/>
        </form> 
        </div>
        );
    }
}
 
export default ClubForm;