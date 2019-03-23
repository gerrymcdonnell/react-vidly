//imrc
import React, { Component } from 'react';

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

    validate = () => {

        const errors = {};

        const { account } = this.state;

        if (account.username.trim() === '')
            errors.username = 'Username required';
        if (account.password.trim() === '')
            errors.password = 'Password required';

        return Object.keys(errors).length === 0 ? null : errors;
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


    handleChange = e => {
        const account = { ...this.state.account };
        account[e.currentTarget.name] = e.currentTarget.value;
        this.setState({ account });
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