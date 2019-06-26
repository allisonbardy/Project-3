import React, { Component } from "react"
import { Input, SubmitButton, } from "../SignIn"
import { BrowserRouter as  Redirect } from "react-router-dom";
import $ from "jquery"

import "../Signup/Signup.css"


class SignIn extends Component {
    state = {   
        email:'',
        password: ''
    }

    handleInputChange = event => {
       const {name, value} = event.target
        console.log('here ', name, value)
        // const currState = this.state.User;
        this.setState({
            [name]: value
        })
    }

    submitUserData(User){
        $.post("/api/signin",User,function(req,res){
            console.log("Posted")
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log('i am there', this.state)
        if(!this.state.email || !this.state.password){
            return;
        }

        else{
            console.log('i am here ',this.state)
            this.submitUserData(this.state)
        }
    }
    render(){
        return(
            <div className="container">
                <div className="border-input container">
                    <p className="text-center">Sign In!</p>
                    Email Address
                    <Input
                        name="email"
                        // placeholder="Email"
                        onChange={this.handleInputChange} 
                    />
                    Password
                    <Input
                        name="password"
                        // placeholder="password"
                        onChange={this.handleInputChange}
                        type="password"
                    />
                    <SubmitButton
                        onClick={this.handleFormSubmit} />
                </div>
            </div>
        )
    }
}

export default SignIn