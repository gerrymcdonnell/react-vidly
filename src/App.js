import React, { Component } from "react";
//{} denotes component
import {ToastContainer} from 'react-toastify';


//import route component
import { Route, Switch, Redirect } from 'react-router-dom'

import Logout from './components/logout';
import NotFound from "./components/notFound";
import Movies from "./components/movies";
import NavBar from './components/navBar';
import Customers from './components/customers';
import Rentals from './components/rentals';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import RegisterForm from "./components/registerForm";

import auth from './services/authService';

import "./App.css";
//import toastift css
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
  state={
  };

  componentDidMount() {
    const user=auth.getCurrentUser();
    this.setState({user});
  } 
  
  
  render() {

    return (
      <React.Fragment>
        <ToastContainer></ToastContainer>
        <NavBar user={this.state.user}/>
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/movies/:id" component={MovieForm} />
            
            {/* pass the user obect to the movies component. render attribute must be used */}
            <Route
              path="/movies"
              render={props => <Movies {...props} user={this.state.user} />}
            />

            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
