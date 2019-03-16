import React from 'react';

//functional component
const MoviesTable = (props) => {

    const { movies, onDelete, onLike } = props;

    return (
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

                        <td>Like</td>
                        {/*zen coding button.btn.btn-danger.btn-sm and press TAB at end*/}

                        <td>
                            {/*to pass an agrumnet use an arrow function for handleDelete */}
                            <button
                                onClick={() => onDelete(movie)}
                                className="btn btn-danger btn-sm"
                            >
                                Delete
                    </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default MoviesTable;