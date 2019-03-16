import React, { Component } from 'react';

class MoviesTable extends Component {

    raiseSort=(path)=>{
        const sortColumn = { ...this.props.sortColumn };
        if (sortColumn.order === path)
          sortColumn.order = (sortColumn.order === "asc") ? "desc" : "asc";
        else {
          sortColumn.path = path;
          sortColumn.order = "asc";
        }
        this.props.onSort(sortColumn);
    };

    render() {
        const { movies, onDelete, onLike} = this.props;

        return (
            <table className="table">
                <thead>
                    <tr>
                        <th onClick={() => this.raiseSort('title')}>Title</th>
                        <th onClick={() => this.raiseSort('genre.name')}>genre</th>
                        <th onClick={() => this.raiseSort('numberInStock')}>stock</th>
                        <th onClick={() => this.raiseSort('dailyRentalRate')}>rate</th>
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
}



export default MoviesTable;