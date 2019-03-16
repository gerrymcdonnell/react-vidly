import React, { Component } from "react";
//curly braces for named expoprts
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";

import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";

import { paginate } from "../utils/paginate";

class Movies extends Component {
  //iniitalise moves with aray of movies
  state = {
    movies: [],
    genres: [],
    pageSize: 5,
    currentPage: 1
  };

  //vid 73 called when component is rendered in DOM
  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  /*not sure how this works*/
  /*handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };*/

  //uses arrow function syntax
  handleDelete = movie => {
    console.log(movie);
    //create a new movies array except the one being deleted
    //using filter method
    //arrow function get all the movies except the one been passed in
    const movies = this.state.movies.filter(m => m._id !== movie._id);

    //set the movies property to our new movies object which will overide props of state object
    this.setState({ movies: movies });
  };

  //TBI
  handleLike = movie => { };

  //vid 67
  handlePageChange = page => {
    console.log("page: ", page);
    //update state to current page
    this.setState({ currentPage: page });
  };

  //vid 73,76
  handleGenreSelect = genre => {
    console.log(genre._id);
    this.setState({ selectGenre: genre });
  };

  render() {
    const count = this.state.movies.length;
    //vid40 also can be written as: const { length: count } = this.state.movies;

    //object destructuring extract from the state object
    const { pageSize, selectedGenre, currentPage, movies: allMovies } = this.state;

    if (count === 0) return <p>There are no movies in the database.</p>;

    //vid77 if the genre is selected apply filter otherwise dont
    //turnery operator filter the movies so that the genre is the same as the selected genre id
    const filtered = selectedGenre
      ? allMovies.filter(m => m.genre._id === selectedGenre._id)
      : allMovies;

    //call paginate function
    const movies = paginate(filtered, currentPage, pageSize);

    return (
      //in jsx must return single element i.e react fragment
      <div className="row">
        <div className="col-3">

          <ListGroup
            items={this.state.genres}
            selectedItem={this.state.selectGenre}
            textProperty="name"
            valueProperty="_id"
            onItemSelect={this.handleGenreSelect}
          />

        </div>
        <div className="col">
          <p>Showing {count} movies in the database.</p>

          {/*bootstrap table*/}

          {/*zen coding tip:  table.table>thead>tr>th*4 and hit TAB to generate the table*/}

          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>genre</th>
                <th>stock</th>
                <th>rate</th>
                <th />
              </tr>
            </thead>

            {/* zen coding tbody>tr>td*4 */}

            <tbody>
              {/*vid 38: map each movie object and map to a tr elemenet*/}
              {/** vid 39: must use key attribute on element being repeated */}
              {movies.map(movie => (
                <tr key={movie._id}>
                  <td>{movie.title}</td>
                  <td>{movie.genre.name}</td>
                  <td>{movie.numberInStock}</td>
                  <td>{movie.dailyRentalRate}</td>
                  {/*zen coding button.btn.btn-danger.btn-sm and press TAB at end*/}

                  <td>
                    {/*to pass an agrumnet use an arrow function for handleDelete */}
                    <button
                      onClick={() => this.handleDelete(movie)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Pagination
            itemsCount={filtered.length}
            pageSize={pageSize}
            onPageChange={this.handlePageChange}
            currentPage={currentPage}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
