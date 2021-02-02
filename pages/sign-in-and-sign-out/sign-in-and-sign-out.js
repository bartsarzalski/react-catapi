import React from "react";

import FormInput from "../../components/form-input/form-input.component";

import "./sign-in-and-sign-out.scss"

class SignInAndSignOut extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        const { email } = this.state;

        console.log(`You've been sign up ${email}!`)
        this.setState({ email: "", password: "" })
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className="sign-up">
                <h2>I don't 
                    have an account</h2>
                <h3>Sign up</h3>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name="email"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label="email"
                        type="email"
                        required />
                    <FormInput 
                        name="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        type="password"
                        required />
                    <button type="submit">Sign up</button>
                </form>
            </div>
        );
    }
}

export default SignInAndSignOut;