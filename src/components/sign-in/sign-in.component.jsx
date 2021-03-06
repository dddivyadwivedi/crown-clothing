import React, { Component } from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input'
import './sign-in.styles.scss'
import { signInWithGoogle } from '../../firebase/firebase.utils'


export class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ' ',
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({email : '' , password : ''})
    }
    handleChange = (event) => {
      this.setState({email : event.target.value , password : event.target.value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" name='email' value={this.state.email} label="Email"  handleChange={this.handleChange}  required/>
                    
                    <FormInput type="password" name='password' value={this.state.password} label='Password'  handleChange={this.handleChange}  required/>

                    <div className="buttons">
                    <CustomButton type="submit"  >Sign In </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
                    </div>
                   
                </form>
            </div>
        )
    }
}

export default SignIn

