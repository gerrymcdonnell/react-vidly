import React, { Component } from 'react';

import TableHeader from './common/tableHeader';
import TableBody from './common/tableBody';

import Like from "./common/like";


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

                {/**vid 84: create table body component and pass in the movies array */}
                <TableBody columns={this.columns} data={movies} />

                {/* zen coding tbody>tr>td*4 */}
                

            </table>
        );
    }
}



export default MoviesTable;