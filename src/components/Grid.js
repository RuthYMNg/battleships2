import React from 'react';
import Row from './Row.js'

const Grid = props => {
    return props.grid.map((el, i) => {
        return (
            <Row
                key={'row' + i} 
                row={i}
                cells={el}
            />  
        )
    });
};

export default Grid;