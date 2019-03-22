import React, { Component } from 'react';
import _ from 'lodash';

class TableBody extends Component {

    renderCell=(item,column)=>{
        if(column.content) return column.content(item);

        return _.get(item,column.path);
    };

    render() {
        /**vid84: object destructering pick data props we need */

        const { data, columns } = this.props;

        return (
            <tbody>
                {/**vid 84 map to table row */}
                {data.map(item => (
                    <tr>{columns.map(column => <td>{this.renderCell(item,column)}</td>)}</tr>
                ))}
            </tbody>
        );
        
    }
}

export default TableBody;