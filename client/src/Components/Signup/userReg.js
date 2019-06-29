import React, { Component } from "react"
import { Input, SubmitButton, } from "../Signup"
import { withRouter } from "react-router-dom"

import axios from 'axios';


import "./Signup.css"


class Signup extends Component {
    state = {

        firstName:'',
        lastName:'',
        email:'',
        password: ''
}



    handleInputChange = event => {
        const { name, value } = event.target
        console.log('here ', name, value)
        // const currState = this.state.User;

        // const newState = {...this.state.User, ...{[name]: value}}

        this.setState({
            [name]: value
        })
    }


    submitUserData(User){
        // $.post("/signup",User,function(req,res){
        //     console.log(res)
        // })
        axios.post('/signup', User)
        .then(res => {
            //check res object
            console.log(res.data)
            if (res.data.message) console.log('SERVER RESPONSE ', res.data.message)
            if (res.data.id) this.props.history.push('/search')

        })
    }



    handleFormSubmit = event => {
        event.preventDefault();
        console.log('i am there', this.state)
        if(!this.state.firstName || !this.state.lastName || !this.state.email || !this.state.password){
            return;
        }

        else{
            console.log('i am here ',this.state)
            this.submitUserData(this.state)
            // this.redirectPage()
        }
    }
    render(){
        
        return(


            <div className="container">
                <div className="border-input container ">
                    <p className="text-center">Sign Up!</p>
                    First Name
                    <Input
                        name="firstName"
                        // placeholder="First Name"
                        onChange={this.handleInputChange}
                    />
                    Last Name
                    <Input
                        name="lastName"
                        // placeholder="Last Name"
                        onChange={this.handleInputChange}
                    />
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

export default withRouter(Signup)