
import http from './httpService';

//returns all movies
export function getMovies() {
  return http.get('http://localhost:3900/api/movies')
}

//1 movie
/*export function getMovie(id) {
  return movies.find(m => m._id === id);
}*/

/*export function saveMovie(movie) {
  let movieInDb = movies.find(m => m._id === movie._id) || {};
  movieInDb.name = movie.name;
  movieInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  movieInDb.numberInStock = movie.numberInStock;
  movieInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!movieInDb._id) {
    movieInDb._id = Date.now();
    movies.push(movieInDb);
  }

  return movieInDb;
}*/

export function deleteMovie(movieId) {
    return http.delete('http://localhost:3900/api/movies'+'/'+movieId);
}
