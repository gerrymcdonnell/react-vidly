import React, { Component } from 'react';

import TableHeader from './common/tableHeader';
class MoviesTable extends Component {

    columns = [
        { path: 'title', label: 'Title' },
        { path: 'genre.name', label: 'Genre' },
        { path: 'numberInStock', label: 'Stock' },
        { path: 'dailyRentalRate', label: 'Rate' },
        { key: 'like' },
        { key: 'delete' }
    ];

    render() {
        const { movies, onDelete, onSort, onLike, sortColumn } = this.props;

        return (
            <table className="table">

                <TableHeader
                    columns={this.columns}
                    sortColumn={sortColumn}
                    onSort={onSort}
                />

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
}



export default MoviesTable;