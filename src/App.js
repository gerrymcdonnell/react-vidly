import React, { Component } from "react";

//{} denotes component
import {ToastContainer} from 'react-toastify';

//import route component
import { Route, Switch, Redirect } from 'react-router-dom'

import NotFound from "./components/notFound";
import Movies from "./components/movies";
import NavBar from './components/navBar';
import Customers from './components/customers';
import Rentals from './components/rentals';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';

import RegisterForm from "./components/registerForm";

import "./App.css";
//import toastift css
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  render() {

    return (
      <React.Fragment>
        <ToastContainer></ToastContainer>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={MovieForm} />
            <Route path="/movies" component={Movies} />
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
