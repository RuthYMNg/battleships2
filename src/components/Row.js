import Cell from './Cell.js';

const Row = props => {
    const cells = props.cells.map((el, i) => {
        return (
            <Cell 
                key={'col' + i} 
                row={props.row}
                col={i}
                cell={el}
            />
        )
    })
    return (
        <div className='row'>
            {cells}
        </div>
    );
};

export default Row;