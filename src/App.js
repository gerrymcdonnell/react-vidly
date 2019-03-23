import React, { Component } from "react";
import Movies from "./components/movies";
import "./App.css";
import Navbar from './components/common/navBar';

class App extends Component {
  render() {
    
    return (
      /* A JSX comment */
      <main className="container">
        <Navbar/>
        <Movies />
      </main>
    );
  }
}

export default App;
