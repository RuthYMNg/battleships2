const Row = props => {
    const cells = props.cells.map((el, i) => {
        return (
            <p 
                key={'col' + i} 
                row={props.row}
                col={i}
                cell={el}
            >CELL</p>
        )
    })
    return (
        <div className='row'>
            {cells}
        </div>
    );
};

export default Row;