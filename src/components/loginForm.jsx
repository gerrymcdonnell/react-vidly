//imrc
import React, { Component } from 'react';
import Joi from 'joi-browser';

import Input from './common/input';

class LoginForm extends Component {

    // vid 114 note: use of ref in react should be limited
    //username = React.createRef();

    //give username field focus
    /*componentDidMount(){
        this.username.current.focus();
    }*/

    state = {
        account: {username: '', password: '' },
        errors:{}
    }

    //shema for joi
    schema={
        username:Joi.string().required().label('Username'),
        password:Joi.string().required().label('Password')
    }

    validate = () => {
        /**joi terminate validation as soon as first error occcurs i.e abortearly */
        const options={abortEarly:false};
        const {error}=Joi.validate(this.state.account,this.schema,options);        

        if(!error) return null;

        const errors = {};
        for(let item of error.details)
            errors[item.path[0]]=item.message;
        return errors;
    }

    handleSubmit = e => {
        //prevent default behaviour of form
        e.preventDefault();

        const errors = this.validate();
        console.log(errors);
        this.setState({ errors });

        if (errors) return;

        //uses ref object to get vlaue of input field
        //const username = this.username.current.value;       

    }

    validateProperty=({name,value})=>{
        const obj={[name]:value};
        const schema={[name]:this.schema[name]};
        const {error}=Joi.validate(obj,schema);

        return error?error.details[0].message: null;

    }

    
    handleChange = ({currentTarget:input}) => {

        console.log('hyandle change');
        
        const errors={...this.state.errors};
        const errorMessage=this.validateProperty(input);

        if(errorMessage) errors[input.name]=errorMessage;
        else delete errors[input.name];       
        
        const account = { ...this.state.account };        
        account[input.name] = input.value;

        this.setState({ account ,errors});
    }

    render() {

        //object destructuring. Pick account property of this.state
        const { account, errors } = this.state;

        return (
            <div>
                <h1>Login</h1>
                {/* form>(div.form-group>label+input.form-control)*2 */}
                <form onSubmit={this.handleSubmit}>

                    <Input
                        name="username"
                        value={account.username}
                        label="Username"
                        onChange={this.handleChange}
                        error={errors.username}
                    />

                    <Input
                        name="password"
                        value={account.password}
                        label="Password"
                        onChange={this.handleChange}
                        error={errors.password}
                    />

                    <button className="btn btn-primary">Login</button>
                </form>


            </div>
        )
    }
}

export default LoginForm;