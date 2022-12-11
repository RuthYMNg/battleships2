import React from 'react';
import styled from 'styled-components';
import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft.js";
import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight.js";

import Button from './Button.js';

const SetupDiv = styled.div``;

const SetupSectionContainer = styled.div`
    margin-bottom: 5rem;
`;

const Subtitle = styled.h4`
    text-align: center;
`;

const Text = styled.p`
    margin-top: 0;
`;

const SetupBar = styled.div`
    display: flex;
    justify-content: center;

    div {
        width: 50px;
    }
`;

const BoatList = styled.div`
    display: inline-block;

    @media only screen and (min-width: 740px) {
        display: flex;
        justify-content: center;
    }
`;

const BoatInfo = styled.div`
    padding: 0 10px 10px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BoatContainer = styled.div`
    width: 100% !important;
    height: 30px;
    border: 2px solid #005982;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin: 0;
`;

const SetupBoat = styled.div`
    font-family: 'Ubuntu', cursive !important;
    margin-top: 6px;
    height: 30px;
    width: 30px;
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
`

const BoatName = styled.h5`
`;

const Buttons = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;

  button {
    margin: 1.5rem auto;
  }
`

const GridSizeCell = styled.div`

    @keyframes animateWidth {
        0% {width:50px;}
        100% {width:100px;}
    }

    height: 50px;
    width: 50px;
    border: 2px solid #005982;
    margin: 0;
    background-color: #15739e;
    margin: 5px;
    animation-duration: .3s;
    animation-fill-mode: both;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #a3e3ef8f;
        cursor: pointer;
    }

    &.active-size {
        background-color: #b12929;
        animation-name: animateWidth;


        &:hover {
            background-color: #b12929;
            color: grey !important;
        }
    }

    @media only screen and (max-width: 420px) {
        height: 28px;
        width: 28px;
        border: 1px solid #005982;
    }
`;

const Setup = props => {
    console.log(props.boats.carrier.number);
    // TODO: Chevrons don't work yet on click

    
    return <SetupDiv>
        <SetupSectionContainer>
            <Subtitle>Select Ocean Size</Subtitle>
            <Text>Number of squares wide and high</Text>
            <SetupBar>
                <GridSizeCell className={`${props.size === 6 ? 'active-size' : 'inactive'}`} onClick={props.handleUpdateGridSize.bind(null, 6)}><p>6</p></GridSizeCell>
                <GridSizeCell className={`${props.size === 7 ? 'active-size' : 'inactive'}`} onClick={props.handleUpdateGridSize.bind(null, 7)}><p>7</p></GridSizeCell>
                <GridSizeCell className={`${props.size === 8 ? 'active-size' : 'inactive'}`} onClick={props.handleUpdateGridSize.bind(null, 8)}><p>8</p></GridSizeCell>
                <GridSizeCell className={`${props.size === 9 ? 'active-size' : 'inactive'}`} onClick={props.handleUpdateGridSize.bind(null, 9)}><p>9</p></GridSizeCell>
                <GridSizeCell className={`${props.size === 10 ? 'active-size' : 'inactive'}`} onClick={props.handleUpdateGridSize.bind(null, 10)}><p>10</p></GridSizeCell>
                <GridSizeCell className={`${props.size === 11 ? 'active-size' : 'inactive'}`} onClick={props.handleUpdateGridSize.bind(null, 11)}><p>11</p></GridSizeCell>
                <GridSizeCell className={`${props.size === 12 ? 'active-size' : 'inactive'}`} onClick={props.handleUpdateGridSize.bind(null, 12)}><p>12</p></GridSizeCell>
            </SetupBar>
        </SetupSectionContainer>
        <SetupSectionContainer>
            <Subtitle>Select Battleships</Subtitle>
            <BoatList>
                <BoatInfo>
                    <BoatContainer>
                        <SetupBoat className='carrier'><p>CA</p></SetupBoat>
                        <SetupBoat className='carrier'><p>CA</p></SetupBoat>
                        <SetupBoat className='carrier'><p>CA</p></SetupBoat>
                        <SetupBoat className='carrier'><p>CA</p></SetupBoat>
                        <SetupBoat className='carrier'><p>CA</p></SetupBoat>
                    </BoatContainer>
                    <BoatName>CARRIER</BoatName>
                    <SetupBar>
                        <h4 className={`icon ${props.boats.carrier.minReached ? 'active-arrow' : ''}`} onClick={props.handleUpdateBoats.bind(null, 'carrier', 'down')}><FaChevronLeft /></h4>
                        <h4 className='icon'>{props.boats.carrier.number}</h4>
                        <h4 className={`icon ${props.boats.carrier.maxReached ? 'active-arrow' : ''}`} onClick={props.handleUpdateBoats.bind(null, 'carrier', 'up')}><FaChevronRight /></h4>
                    </SetupBar>
                </BoatInfo>
                <BoatInfo>
                    <BoatContainer>
                        <SetupBoat className='battleship'><p>B</p></SetupBoat>
                        <SetupBoat className='battleship'><p>B</p></SetupBoat>
                        <SetupBoat className='battleship'><p>B</p></SetupBoat>
                        <SetupBoat className='battleship'><p>B</p></SetupBoat>
                    </BoatContainer>
                    <BoatName>BATTLESHIP</BoatName>
                </BoatInfo>
                <BoatInfo>
                    <BoatContainer>
                        <SetupBoat className='cruiser'><p>C</p></SetupBoat>
                        <SetupBoat className='cruiser'><p>C</p></SetupBoat>
                        <SetupBoat className='cruiser'><p>C</p></SetupBoat>
                    </BoatContainer>
                    <BoatName>CRUISER</BoatName>
                </BoatInfo>
                <BoatInfo>
                    <BoatContainer>
                        <SetupBoat className='submarine'><p>S</p></SetupBoat>
                        <SetupBoat className='submarine'><p>S</p></SetupBoat>
                        <SetupBoat className='submarine'><p>S</p></SetupBoat>
                    </BoatContainer>
                    <BoatName>SUBMARINE</BoatName>
                </BoatInfo>
                <BoatInfo>
                    <BoatContainer>
                        <SetupBoat className='destroyer'><p>D</p></SetupBoat>
                        <SetupBoat className='destroyer'><p>D</p></SetupBoat>
                    </BoatContainer>
                    <BoatName>DESTROYER</BoatName>
                </BoatInfo>
            </BoatList>
        </SetupSectionContainer>
        <Buttons>
            <Button onClick={props.handleSetup}><p>Start Game</p></Button>
            <Button onClick={props.toggleInstructions}><p>How to play</p></Button>
        </Buttons>
    </SetupDiv>
};

export default Setup;