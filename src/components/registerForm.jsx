import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

//import {register} from '../services/userService';
//or import all
import * as userService from '../services/userService';

class RegisterForm extends Form {
  state = {
    data: { username: "", password: "", name: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .email()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };


  doSubmit = () => {
    // Call the server
    console.log("Submitted");
    
    // returns a promise so we need to
    // await it and 
    // make function call async
    await userService.register(this.state.data);
  };


  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderInput("name", "Name")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
