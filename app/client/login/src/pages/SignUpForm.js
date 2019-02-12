import React, { Component } from 'react';
import{Link} from 'react-router-dom'

class SignUpForm extends Component {
    constructor(){
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false

        };

        this.handleChange = this.handleChange.bind(this);

    }

    handleChange(e){
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }
    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }
    
    render() {
        return (
            <div className = "FormCenter">
              <form className = "FormFields" onSubmit={this.handleSubmit}>
                <div className = "FormField">
                  <label className = "FormField_Label" htmlFor = "name">Full Name</label>
                  <input type="text" id="name" className="FormField_Input" placeholder = "Enter your full name" name = "name" value={this.state.name} onChange={this.handleChange}/>
                </div>
                <div className = "FormField">
                  <label className = "FormField_Label" htmlFor = "email">E-mail Address</label>
                  <input type="email" id="email" className="FormField_Input" placeholder = "Enter your email" name = "email" value={this.state.email} onChange={this.handleChange}/>
                </div>
                <div className = "FormField">
                  <label className = "FormField_Label" htmlFor = "password">Password</label>
                  <input type="password" id="password" className="FormField_Input" placeholder = "Enter your password" name = "password"value={this.state.password} onChange={this.handleChange}/>
                </div>
                <div className = "FormField">
                <label className = "FormField_CheckboxLabel">
                  <input className = "FormField_Checkbox" type = "checkbox" name = "hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange}/>I agree with all the statements in <a href = "" className = "FormField_TermsLink"> terms of service</a>
                </label>
                </div>
                <div className FormField >
                  <button className = "FormField_Button mr-20">Sign Up</button><Link to = "/sign-in" className = "FormField_Link">I am already a member</Link>
                </div>
              </form>
            </div>

        )
    }
}

export default SignUpForm;