//imrc
import React, { Component } from 'react';
import Joi from 'joi-browser';

import Input from './common/input';
import Form from './common/form';

class LoginForm extends Form {

    // vid 114 note: use of ref in react should be limited
    //username = React.createRef();

    //give username field focus
    /*componentDidMount(){
        this.username.current.focus();
    }*/

    state = {
        data: { username: '', password: '' },
        errors: {}
    }

    //shema for joi
    schema = {
        username: Joi.string().required().label('Username'),
        password: Joi.string().required().label('Password')
    }



    doSubmit = () => {
        //call server
        console.log('submitted');
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