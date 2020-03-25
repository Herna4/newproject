import React, { Component } from 'react'

class SignUp extends Component {
    state = {
        name: "",
        email: "",
        password: '',
        password_confiramtion: ''
    }

    handleChange = (event) => {
        // console.log(event)
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    handleSubmit = (event) => {
        // console.log(event)
        event.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                   <h5 className="grey-text text-darken-3">Sign Up</h5>

                   <div className="input-field">
                       <label htmlFor="name">Name</label>
                       <input type="text" id="name" onChange={this.handleChange} />
                   </div>

                   <div className="input-field">
                       <label htmlFor="email">Email</label>
                       <input type="email" id="email" onChange={this.handleChange} />
                   </div>

                   <div className="input-field">
                       <label htmlFor="password">Password</label>
                       <input type="password" id="password" onChange={this.handleChange} />
                   </div>

                   <div className="input-field">
                       <label htmlFor="password_confirmation">Password Confirmation</label>
                       <input type="password" id="password_confirmation" onChange={this.handleChange} />
                   </div>

                   <div className="input-field">
                       <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
                   </div>
                </form>
            </div>
        )
    }
}

export default SignUp