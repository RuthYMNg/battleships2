import React from 'react';
import styled from 'styled-components';

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
    display: inline-block;
`;

const BoatList = styled.div`
    display: inline-block;
`;

const BoatInfo = styled.div`
`;

const BoatContainer = styled.div`
    display: inline-block;
`;

const BoatName = styled.h5`
`;

const GridSizeCell = styled.div`
    display: inline-block;
`;

const Setup = props => {
    return <SetupDiv>
        <SetupSectionContainer>
            <Subtitle>Select Ocean Size</Subtitle>
            <Text>Number of squares wide and high</Text>
            <SetupBar>
                <GridSizeCell><p>6</p></GridSizeCell>
                <GridSizeCell><p>7</p></GridSizeCell>
                <GridSizeCell><p>8</p></GridSizeCell>
                <GridSizeCell><p>9</p></GridSizeCell>
                <GridSizeCell><p>10</p></GridSizeCell>
                <GridSizeCell><p>11</p></GridSizeCell>
                <GridSizeCell><p>12</p></GridSizeCell>
            </SetupBar>
        </SetupSectionContainer>
        <SetupSectionContainer>
            <Subtitle>Select Battleships</Subtitle>
            <BoatList>
                <BoatInfo>
                    <BoatContainer>
                        <div className='setup-boat carrier'><p>CA</p></div>
                        <div className='setup-boat carrier'><p>CA</p></div>
                        <div className='setup-boat carrier'><p>CA</p></div>
                        <div className='setup-boat carrier'><p>CA</p></div>
                        <div className='setup-boat carrier'><p>CA</p></div>
                    </BoatContainer>
                    <BoatName>CARRIER</BoatName>
                </BoatInfo>
                <BoatInfo>
                    <BoatContainer>
                        <div className='setup-boat battleship'><p>B</p></div>
                        <div className='setup-boat battleship'><p>B</p></div>
                        <div className='setup-boat battleship'><p>B</p></div>
                        <div className='setup-boat battleship'><p>B</p></div>
                    </BoatContainer>
                    <BoatName>BATTLESHIP</BoatName>
                </BoatInfo>
                <BoatInfo>
                    <BoatContainer>
                        <div className='setup-boat cruiser'><p>C</p></div>
                        <div className='setup-boat cruiser'><p>C</p></div>
                        <div className='setup-boat cruiser'><p>C</p></div>
                    </BoatContainer>
                    <BoatName>CRUISER</BoatName>
                </BoatInfo>
                <BoatInfo>
                    <BoatContainer>
                        <div className='setup-boat submarine'><p>S</p></div>
                        <div className='setup-boat submarine'><p>S</p></div>
                        <div className='setup-boat submarine'><p>S</p></div>
                    </BoatContainer>
                    <BoatName>SUBMARINE</BoatName>
                </BoatInfo>
                <BoatInfo>
                    <BoatContainer>
                        <div className='setup-boat destroyer'><p>D</p></div>
                        <div className='setup-boat destroyer'><p>D</p></div>
                    </BoatContainer>
                    <BoatName>DESTROYER</BoatName>
                </BoatInfo>
            </BoatList>
        </SetupSectionContainer>
        <Button onClick={props.handleSetup}><p>Start Game</p></Button>
    </SetupDiv>
};

export default Setup;