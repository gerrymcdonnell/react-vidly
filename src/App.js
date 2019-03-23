import React, { Component } from "react";
//import route component
import { Route, Switch, Redirect } from 'react-router-dom'

import NotFound from "./components/notFound";
import Movies from "./components/movies";

import "./App.css";
import Navbar from './components/navBar';
import Home from './components/home';
import Customers from './components/customers';
import Rentals from './components/rentals';

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
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>



      </main>
    );
  }
}

export default App;
