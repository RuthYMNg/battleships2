import React from 'react';
import propTypes from 'prop-types';
import Row from './Row.js';

const Grid = props => {
    return props.grid.map((el, i) => {
        return (
            <Row
                key={'row' + i} 
                row={i}
                cells={el}
                player={props.player}
                win={props.win}
                turn={props.player}
            />  
        )
    });
};

Grid.propTypes = {
    grid: propTypes.arrayOf(propTypes.array).isRequired,
    player: propTypes.string.isRequired,
    win: propTypes.any.isRequired,
    turn: propTypes.string.isRequired
};

export default Grid;