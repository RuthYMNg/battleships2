import React from 'react';
import styled from 'styled-components';

const CellContainer = styled.div`
    width: 3rem;
    height: 3rem;
    background-color: blanchedalmond;
`;

const Cell = () => {
    return <CellContainer className='cell'>C</CellContainer>
};

export default Cell;