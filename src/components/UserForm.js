import React, { Component } from 'react';

class UserForm extends Component {
    
    state = {
        name: "",
        password: "",
        quote: "",
        image: ""
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.handleSubmit(this.state)
        if (this.props.formName === "Register Form"){
            this.setState({
                name: "",
                password: "",
                quote: "",
                image: ""
            })    
        } else {
            this.setState({
                name: "",
                password: ""
            })
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() { 
        let { formName } = this.props
        return (
        <div className="login-form"> <h1>{formName}</h1>
            <form onSubmit={this.handleSubmit} >
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Enter name" autocomplete="off"></input>
                <br></br>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Enter password" autocomplete="off"></input>
                <br></br>
                { this.props.formName === "Register Form" ? 
                <>
                <input type="text" name="image" value={this.state.image} onChange={this.handleChange} placeholder="Add an image!"></input>
                <br></br>
                <input type="text" name="quote" value={this.state.quote} onChange={this.handleChange} placeholder="Add a quote or slogan!"></input>
                <br></br>
                </>
            :null}

                <input type="submit"/>
            </form>
            </div>
            );
    }
}

export default UserForm;