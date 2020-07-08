import React, { Component } from 'react';
import AddMember from "./AddMember";
import ClubForm from "./ClubForm";

class CreateClub extends Component {

    state = {
        displayForm: true
    }

    toggleDisplay = () => {
        this.setState({
            displayForm: false
        })
    }

    render() { 
        return ( 
            <div className="create-club-container">
                <div className="create-club-title">Create a Club!</div>

                <div className="create-club-content">
                    {this.state.displayForm ?
                    <ClubForm toggleDisplay={this.toggleDisplay} addOneClub={this.props.addOneClub}/>
                    :
                    <AddMember />
                    }
                </div>
            </div>
         )
    }
}
 
export default CreateClub;