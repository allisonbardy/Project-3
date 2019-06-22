import React, { Component } from "react"
import { Input, SubmitButton, } from "../Signup"
import { BrowserRouter as  Redirect } from "react-router-dom";
import $ from "jquery"

import "./Signup.css"


class Signup extends Component {
    state = {
        User: {
        firstName:'',
        lastName:'',
        email:'',
        password: ''
    },

    redirect: false
}


    handleInputChange = event => {
       const {name, value} = event.target
        console.log('here ', name, value)
        // const currState = this.state.User;
        const newState = {...this.state.User, ...{[name]: value}}
        this.setState({
            User: newState
        })
    }

    submitUserData(User){
        $.post("/api/users",User,function(req,res){
            console.log("Posted")
        })
    }


    redirectPage(){
        this.setState({
            redirect: true
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        console.log('i am there', this.state.User)
        if(!this.state.User.firstName || !this.state.User.lastName || !this.state.User.email || !this.state.User.password){
            return;
        }

        else{
            console.log('i am here ',this.state.User)
            this.submitUserData(this.state.User)
            this.redirectPage()
        }
    }
    render(){
        const { redirect } = this.state.redirect;
    console.log('from render ', this.state.User)
     if (redirect) {
       return <Redirect to='/'/>;
     }
        return(

            <div className="container">
                <div className="border-input">
                    <Input
                        name = "firstName"
                        placeholder="First Name"
                        onChange={this.handleInputChange}
                    />
                    <Input
                        name="lastName"
                        placeholder="Last Name"
                        onChange={this.handleInputChange} 
                    />
                    <Input
                        name="email"
                        placeholder="Email"
                        onChange={this.handleInputChange} 
                    />
                    <Input
                        name="password"
                        placeholder="password"
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

export default Signup