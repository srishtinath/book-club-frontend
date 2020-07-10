import React, { Component } from 'react';

class UserForm extends Component {
    
    state = {
        name: "",
        password: "",
        // image: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
        this.setState({
            name: "",
            password: ""
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() { 
        let { formName } = this.props
        // console.log(this.state)
        return (
        <div> <h1>{formName}</h1>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Enter name"></input>
                <input type="text" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter password"></input>
                <input type="submit"/>
            </form>
            </div>
            );
    }
}

export default UserForm;