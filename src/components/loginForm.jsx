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
        data: {username: '', password: '' },
        errors:{}
    }

    //shema for joi
    schema={
        username:Joi.string().required().label('Username'),
        password:Joi.string().required().label('Password')
    }

    

    doSubmit=()=>{
        //call server
        console.log('submitted');
    }

  
    render() {

        //object destructuring. Pick account property of this.state
        const { data, errors } = this.state;

        return (
            <div>
                <h1>Login</h1>
                {/* form>(div.form-group>label+input.form-control)*2 */}
                <form onSubmit={this.handleSubmit}>

                    <Input
                        name="username"
                        value={data.username}
                        label="Username"
                        onChange={this.handleChange}
                        error={errors.username}
                    />

                    <Input
                        name="password"
                        value={data.password}
                        label="Password"
                        onChange={this.handleChange}
                        error={errors.password}
                    />

                    <button 
                    disabled={this.validate()}
                    className="btn btn-primary">Login</button>
                </form>


            </div>
        )
    }
}

export default LoginForm;