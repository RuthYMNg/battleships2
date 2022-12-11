import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import fire from '../style/fire.png';
import splash from '../style/splash.png';

const CellContainer = styled.div`
  height: 35px;
  width: 35px;
  border: 2px solid #005982;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 420px) {
    height: 28px;
    width: 28px;
    border: 1px solid #005982;
  }

  img {
    max-width: 80%;
    margin: 0 auto;
  }

  p {
    margin-top: 6px;
  }

  &.red {
    background-color: #b12929;
  }

  &.blue {
    background-color: #067286;
  }

  &.sea {
    background-color: #a3e3ef8f !important;
  }

  &.cell-hover {
    :hover {
    border: 2px solid #a3e3ef8f;
    cursor: crosshair;
    }
  }
`;

const Cell = props => {
    
    if (props.win && props.player === 'computer') {
      if (props.cell.name === "Carrier") {
        return <CellContainer className='carrier'><p>CA</p></CellContainer>
      } else if (props.cell.name === "Battleship") {
        return <CellContainer className='battleship'><p>B</p></CellContainer>
      } else if (props.cell.name === "Cruiser") {
        return <CellContainer className='cruiser'><p>C</p></CellContainer>
      } else if (props.cell.name === "Submarine") {
        return <CellContainer className='submarine'><p>S</p></CellContainer>
      } else if (props.cell.name === "Destroyer") {
        return <CellContainer className='destroyer'><p>D</p></CellContainer>
      } else if (props.cell.isDiscovered) {
        return <CellContainer className='blue'><img src={splash} alt='Splash!'/></CellContainer>
      } else {
        return <CellContainer className='sea'></CellContainer>
      }
    } else if (props.player === 'human') {
      if (props.cell.isShip && props.cell.isDiscovered) {
        return <CellContainer className='red'><img src={fire} alt='Explosion'/></CellContainer>
      } else if (props.cell.name === "Carrier") {
        return <CellContainer className='carrier'><p>CA</p></CellContainer>
      } else if (props.cell.name === "Battleship") {
        return <CellContainer className='battleship'><p>B</p></CellContainer>
      } else if (props.cell.name === "Cruiser") {
        return <CellContainer className='cruiser'><p>C</p></CellContainer>
      } else if (props.cell.name === "Submarine") {
        return <CellContainer className='submarine'><p>S</p></CellContainer>
      } else if (props.cell.name === "Destroyer") {
        return <CellContainer className='destroyer'><p>D</p></CellContainer>
      } else if (props.cell.isDiscovered) {
        return <CellContainer className='blue'><img src={splash} alt='Splash!'/></CellContainer>
      } else {
        return <CellContainer className='sea'></CellContainer>
      }
    } else {
      
      if (props.dev && props.cell.isShip && !props.cell.isDiscovered && props.player === 'computer') {
        return  <CellContainer className={`${props.player === 'computer' ? 'cell-hover' : ''} sea`} onClick={props.handleFire.bind(null, props.row, props.col)}>.</CellContainer>
      }
      if (props.cell.isShip && props.cell.isDiscovered) {
        return <CellContainer className='red'><img src={fire} alt='Explosion'/></CellContainer>
      } else if (props.cell.isDiscovered) {
        return <CellContainer className='blue'><img src={splash} alt='Splash!'/></CellContainer>
      } else if (props.player === 'computer') {
        return <CellContainer className={`${props.player === 'computer' ? 'cell-hover' : ''} sea`} onClick={props.handleFire.bind(null, props.row, props.col)}></CellContainer>
       // return <CellContainer className={`${props.player === 'A' ? 'cell-hover' : ''} sea`} onClick={props.player === 'A' ? props.fire.bind(null, props.row, props.col) : null}></CellContainer>
      } else {
        return <CellContainer className='sea'></CellContainer>
      }
    }
  };

Cell.propTypes = {
    cell: propTypes.object.isRequired,
    player: propTypes.string.isRequired,
    win: propTypes.any.isRequired,
    turn: propTypes.string.isRequired,
    handleFire: propTypes.func.isRequired
}; 

export default Cell;