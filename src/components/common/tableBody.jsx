import React, { Component } from 'react';
import _ from 'lodash';

class TableBody extends Component {

    renderCell=(item,column)=>{
        if(column.content) return column.content(item);

        return _.get(item,column.path);
    };
    
    //video 86
    createKey=(item,column)=>{
        return item._id+(column.path||column.key);
    }

    render() {
        /**vid84: object destructering pick data props we need */
        const { data, columns } = this.props;

        return (
            <tbody>
                {/**vid 84 map to table row */}
                {data.map(item => (
                    <tr key={item._id}>
                        {columns.map(column => 
                            <td key={this.createKey(item,column)}>
                                {this.renderCell(item,column)}
                            </td>)}
                    </tr>
                ))}
            </tbody>
        );
        
    }
}

export default TableBody;