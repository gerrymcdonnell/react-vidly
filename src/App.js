import React, { Component } from "react";
//import route component
import { Route, Switch, Redirect } from 'react-router-dom'

import NotFound from "./components/notFound";
import Movies from "./components/movies";
import "./App.css";
import Navbar from './components/common/navBar';

class App extends Component {
  render() {

    return (
      /* A JSX comment */
      <main className="container">
        <Navbar />
        <Movies />

        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Movies} />
          <Redirect to="/not-found" />
        </Switch>



      </main>
    );
  }
}

export default App;
