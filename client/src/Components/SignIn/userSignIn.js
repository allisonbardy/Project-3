import React, { Component } from "react"
import { Input, SubmitButton, } from "../SignIn"
import axios from 'axios'
import { withRouter } from "react-router-dom"
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

    checkSignin(User){
        axios.post('/signin', User)
        .then(res=>{
            console.log(res.data)
            if (res.data.message) console.log('SERVER RESPONSE', res.data.message)
            if (res.data.id) this.props.history.push('/search')
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
            this.checkSignin(this.state)
           
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

export default withRouter(SignIn)