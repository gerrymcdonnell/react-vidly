import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies()
  };

  /*not sure how this works*/
  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  render() {
    const { length: count } = this.state.movies;

    if (count === 0) return <p>There are no movies in the database.</p>;

    return (
      <React.Fragment>
        <p>..Showing {count} movies in the database.</p>

        {/*bootstrap table*/}

        {/*zen coding tip:  table.table>thead>tr>th*4 and hit TAB to generate the table*/}
        
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>genre</th>
              <th>stock</th>
              <th>rate</th>
            </tr>
          </thead>
          
          {/*tbody>tr*4*/}
          
          <tbody>
            <tr></tr>
            <tr></tr>
            <tr></tr>
            <tr></tr>
          </tbody>

        </table>

      </React.Fragment>
    );
  }
}

export default Movies;
