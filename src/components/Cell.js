import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const CellContainer = styled.div`
    width: 3rem;
    height: 3rem;
    background-color: blanchedalmond;
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
        return <CellContainer className='blue'><img src='/splash.png' alt='Splash!'/></CellContainer>
      } else {
        return <CellContainer className='sea'></CellContainer>
      }
    } else if (props.player === 'human') {
      if (props.cell.isShip && props.cell.isDiscovered) {
        return <CellContainer className='red'><p>X</p></CellContainer>
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
        return <CellContainer className='blue'><p>O</p></CellContainer>
      } else {
        return <CellContainer className='sea'></CellContainer>
      }
    } else {
      if (props.cell.isShip && props.cell.isDiscovered) {
        return <CellContainer className='red'><p>X</p></CellContainer>
      } else if (props.cell.isDiscovered) {
        return <CellContainer className='blue'><p>O</p></CellContainer>
      } else if (props.player === 'computer') {
        return <CellContainer className={`${props.player === 'A' ? 'cell-hover' : ''} sea`} onClick={props.handleFire.bind(null, props.row, props.col)}></CellContainer>
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