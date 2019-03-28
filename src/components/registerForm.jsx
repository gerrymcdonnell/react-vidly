import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";

//import {register} from '../services/userService';
//or import all
import * as userService from '../services/userService';

class RegisterForm extends Form {
  state = {
    // not defaults are set for demo purposes
    //data: { username: "ted@ted.com", password: "tedted", name: "ted" },
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
      .min(3)
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Name")
  };


  doSubmit = async () => {
    // Call the server
    console.log("Submitted");

    // returns a promise so we need to
    // await it and 
    // make function call async
    try {
      await userService.register(this.state.data);
    }
    //vid 170
    catch (ex) {
      if (ex.response && ex.response.status === 400) {

        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }

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
