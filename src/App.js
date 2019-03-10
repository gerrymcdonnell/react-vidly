import React, { Component } from "react";
import Movies from "./components/movies";
import "./App.css";

class App extends Component {
  render() {
    return (
      /* A JSX comment */
      <main className="container">
        <Movies />
      </main>
    );
  }
}

export default App;
