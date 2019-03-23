import React, { Component } from "react";

//import route component
import { Route, Switch, Redirect } from 'react-router-dom'

import NotFound from "./components/notFound";
import Movies from "./components/movies";
import Navbar from './components/navBar';
import Home from './components/home';
import Customers from './components/customers';
import Rentals from './components/rentals';

import "./App.css";

class App extends Component {
  render() {

    return (
      /* A JSX comment */
      <main className="container">
        <Navbar />


        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>



      </main>
    );
  }
}

export default App;
