import React from 'react';
import styled from 'styled-components';

const CellContainer = styled.div`
    width: 3rem;
    height: 3rem;
    background-color: blanchedalmond;
`;

const Cell = props => {
    const cellContent = props.cell.name ? props.cell.name.split("")[0] : "0";

    return <CellContainer className='cell'>{cellContent}</CellContainer>
};

export default Cell;