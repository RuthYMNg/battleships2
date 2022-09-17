import Cell from './Cell.js';
import styled from 'styled-components';

const RowContainer = styled.div`
    display: inline-block;
`;

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
        <RowContainer>
            {cells}
        </RowContainer>
    );
};

export default Row;