import { Component } from 'react';
import auth from '../services/authService';

class Logout extends Component {
    
    componentDidMount() {        
        auth.logout();
        // vid 180 what happens when the users log's out is not the responsability of the component
        window.location='/';
    }
    render() { 
        return null;
    }
}
 
export default Logout;