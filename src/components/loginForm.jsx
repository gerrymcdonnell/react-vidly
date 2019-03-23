//imrc
import React, { Component } from 'react';

class LoginForm extends Component {

    render() {
        return (
            <div>
                <h1>Login</h1>
                {/* form>(div.form-group>label+input.form-control)*2 */}
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" className="form-control" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input id="password" type="text" className="form-control" />
                    </div>
                    <button className="btn btn-primnary">Login</button>
                </form>


            </div>
        )
    }
}

export default LoginForm;