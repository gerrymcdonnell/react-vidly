import React, { Component } from "react";
//curly braces for named expoprts
import { getMovies,deleteMovie } from "../services/movieService";

//import { getGenres } from "../services/fakeGenreService";
import { getGenres } from "../services/genreService";

import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import MoviesTable from './moviesTable';
import { paginate } from "../utils/paginate";

import {toast} from 'react-toastify';


import _ from 'lodash';

class Movies extends Component {
  //iniitalise moves with aray of movies
  state = {
    movies: [],
    genres: [],
    pageSize: 5,
    currentPage: 1,
    sortColumn: { path: 'title', order: 'asc' }
  };

  //vid 73 called when component is rendered in DOM
  async componentDidMount() {
    /**vid 78 spread operator
     * create a new array of genres by copying exisitng one and adding all genres to the start of array
     */
    //new genre service
    const{data}=await getGenres();
    const genres = [{ _id: "", name: 'All Genres' }, ...data]


    const {data:movies}=await getMovies();

    this.setState({ movies, genres });
  }

  /*not sure how this works*/
  /*handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };*/

  //uses arrow function syntax
  handleDelete = async movie => {
    
    const originalMovies=this.state.movies;   

    //arrow function get all the movies except the one been passed in
    const movies = originalMovies.filter(m => m._id !== movie._id);

    //set the movies property to our new movies object which will overide props of state object
    this.setState({ movies });

    try{
      await deleteMovie(movie._id);
    }
    catch(ex){
      if (ex.response && ex.response.status === 404)        
        toast.error('This movie has already being deleted')
        //revert change due to error
        this.setState({ movies: originalMovies });
    }
  };

  //TBI
  handleLike = movie => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  //vid 67
  handlePageChange = page => {
    console.log("page: ", page);
    //update state to current page
    this.setState({ currentPage: page });
  };

  //vid 73,76
  handleGenreSelect = genre => {
    console.log(genre._id);
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };


  //vid 89
  getPagedData = () => {

    //object destructuring extract from the state object
    const {
      pageSize,
      selectedGenre,
      currentPage,
      sortColumn,
      movies: allMovies } = this.state;


    // vid77 if the genre is selected apply filter otherwise dont
    // turnery operator filter the movies so that the genre is the same as the selected genre id
    const filtered = selectedGenre && selectedGenre._id
      ? allMovies.filter(m => m.genre._id === selectedGenre._id)
      : allMovies;

    //sort
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    //call paginate function
    const movies = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: movies };
  }


  render() {
    const count = this.state.movies.length;
    //vid40 also can be written as: const { length: count } = this.state.movies;

    //object destructuring extract from the state object
    const {
      pageSize,
      currentPage,
      sortColumn
    } = this.state;

    if (count === 0) return <p>There are no movies in the database.</p>;

    const { totalCount, data: movies } = this.getPagedData();


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
          <p>Showing {totalCount} movies in the database.</p>
          {/** display the movies component and the various events to the handlers */}
          <MoviesTable
            movies={movies}
            onDelete={this.handleDelete}
            onLike={this.handleLike}
            onSort={this.handleSort}
            sortColumn={sortColumn}
          />


          {/*zen coding tip:  table.table>thead>tr>th*4 and hit TAB to generate the table*/}



          <Pagination
            itemsCount={totalCount}
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
