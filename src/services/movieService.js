
import http from './httpService';
import config from '../config.json';


function movieUrl(id) {
  return `${config.apiUrl}/${id}`;
}

//returns all movies
export function getMovies() {
  return http.get(config.apiUrl+'/movies')
}

//1 movie
export function getMovie(movieId) {
  return http.get(movieUrl(movieId));
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(movieUrl(movie._id), body);
  }

  return http.post(config.apiUrl, movie);
}

export function deleteMovie(movieId) {
    return http.delete(config.apiUrl+'/movies/'+movieId);
}
