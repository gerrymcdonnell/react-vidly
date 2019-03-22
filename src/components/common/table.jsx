import React, { Component } from 'react';
import TableHeader from './tableHeader';
import TableBody from './tableBody';

const Table = (props) => {

    const {columns,sortColumn,onSort,data}=props;

    return (
        <table className="table">
                <TableHeader
                    columns={columns}
                    sortColumn={sortColumn}
                    onSort={onSort}
                />
                {/**vid 84: create table body component and pass in the movies array */}
                <TableBody columns={columns} data={data} />
        </table>
      );
}
 
export default Table;