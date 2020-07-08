import React, { Component } from 'react';

class CreateClub extends Component {

    state = {
        name: "",
        image: "",
        meeting: ""
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit= (event) => {
        event.preventDefault()
        fetch("http://localhost:3000/clubs", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                "accept": "application/json"
            },
            body: JSON.stringify(this.state)
        })
        .then(r => r.json())
        .then(newClub => {
            this.props.addOneClub(newClub)
        })
    }
    
    render() { 
        console.log(this.state)
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Club Name..."
                        value={this.state.name}
                        onChange={this.handleInput}
                    />
                    <input 
                        type="text" 
                        name="image" 
                        placeholder="Club Image..."
                        value={this.state.image}
                        onChange={this.handleInput}
                    />
                    <input 
                        type="text" 
                        name="meeting" 
                        placeholder="Meeting Date (DD/MM/YYYY)"
                        value={this.state.meeting}
                        onChange={this.handleInput}
                    />
                <br/>
                    <input type="submit" name="submit" value="Let's Read!"/>
                </form>
            </div>
         );
    }
}
 
export default CreateClub;