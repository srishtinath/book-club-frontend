import React, { Component } from 'react';

class CreateClub extends Component {

    state = {
        
    }
    
    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit} className="add-club">
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Club Name..."
                        // value={this.state.name}
                        // onChange={this.handleInput}
                    />
                <br/>
                    <input 
                        type="text" 
                        name="image" 
                        placeholder="Club Image..."
                        // value={this.state.image}
                        // onChange={this.handleInput}
                    />
                <br/>
                    <input 
                        type="text" 
                        name="meeting" 
                        placeholder="Meeting Date (DD/MM/YYYY)"
                        // value={this.state.image}
                        // onChange={this.handleInput}
                    />
                <br/>
                    <input type="submit" name="submit" value="Let's Read!"/>

                </form>
            </div>
         );
    }
}
 
export default CreateClub;