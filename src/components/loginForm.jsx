//imrc
import React, { Component } from 'react';

class LoginForm extends Component {

    // vid 114 note: use of ref in react should be limited
    username = React.createRef();

    //give username field focus
    /*componentDidMount(){
        this.username.current.focus();
    }*/

    state = {
        account: {
            username: '', password: ''
        }
    }

    handleSubmit = e => {
        //prevent default behaviour of form
        e.preventDefault();

        //uses ref object to get vlaue of input field
        const username = this.username.current.value;

        //call the server
        console.log('submitted');
    }


    handleChange=e=>{
        const account={...this.state.account};
        account.username=e.currentTarget.value;
        this.setState({account});
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                {/* form>(div.form-group>label+input.form-control)*2 */}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            value={this.state.account.username}
                            onChange={this.handleChange}
                            autoFocus ref={this.username} id="username" type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="text" className="form-control" />
                    </div>
                    <button className="btn btn-primary">Login</button>
                </form>


            </div>
        )
    }
}

export default LoginForm;