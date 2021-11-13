import React from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfile } from '../../firebase/firebase.utils';
import './sign-up.component.styles.scss';

class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert('password mismatch');
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfile(user, { displayName });
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        } catch (err) {
            console.log(err);
        }
    }
        handleChange = event =>{
            const {name , value} = event.target;

            this.setState({[name] : value});
        }

    



    render() {
        return (
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit} >
                    <FormInput type='text'
                        name='displayName'
                        value={this.state.displayName}
                        onChange={this.handleChange}
                        label='Display Name' required />
                    <FormInput type='email'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                        label='Email' required />
                    <FormInput type='pasword'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        label='Password' required />
                    <FormInput type='password'
                        name='confirmPassword'
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password' required />
                    <CustomButton type='submit' >Sign Up </CustomButton>
                </form>
            </div>
        )
    }

}
export default SignUp;