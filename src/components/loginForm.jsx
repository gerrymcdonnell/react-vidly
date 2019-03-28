//imrc
import React, { Component } from 'react';
import Joi from 'joi-browser';

import Input from './common/input';
import Form from './common/form';

import {login} from '../services/authService';

class LoginForm extends Form {

    // vid 114 note: use of ref in react should be limited
    //username = React.createRef();

    //give username field focus
    /*componentDidMount(){
        this.username.current.focus();
    }*/

    state = {
        data: { username: 'ted@ted.com', password: 'tedted' },
        errors: {}
    }

    //shema for joi
    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }



    doSubmit = async () => {
        //call server
        //console.log('Login submitted');
        
        try{
            //vid 172 object destructing
            const {data}=this.state;
            
            //vid 174 get the jwt
            const {data:jwt}=await login(data.username,data.password);
            //store jwt in localstorage
            localStorage.setItem('token',jwt);
            //console.log('jwt= ',jwt);

            //redirect user back to homepage
            window.location='/';
        }
        catch(ex){            
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.username = ex.response.data;
                this.setState({ errors });
            }
        }


    }


    render() {



        return (
            <div>
                <h1>Login</h1>
                {/* form>(div.form-group>label+input.form-control)*2 */}
                <form onSubmit={this.handleSubmit}>

                    {this.renderInput('username','Username')}

                    {this.renderInput('password','Password','password')}

                    {this.renderButton("Login")}
                </form>


            </div>
        )
    }
}

export default LoginForm;