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
                handleFire={props.handleFire}
            />  
        )
    });
};

Grid.propTypes = {
    grid: propTypes.arrayOf(propTypes.array).isRequired,
    player: propTypes.string.isRequired,
    win: propTypes.any.isRequired,
    turn: propTypes.string.isRequired,
    handleFire: propTypes.func.isRequired
};

export default Grid;