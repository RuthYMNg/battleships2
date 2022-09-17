import React, { useState } from 'react';
import Grid from './Grid.js';
import Setup from './Setup.js';

import standardBoats from '../logic/standardBoats.js';
import boatsObject from '../logic/boatsObject.js';
import setupBoatsList from '../logic/setupBoats.js';
import generateGrid from '../logic/generateGrid.js';
import createGame from '../logic/createGame.js';

const Game = () => {

    const [ width, setWidth ] = useState(10);
    const [ height, setHeight ] = useState(10);
    const [ gridA, setGridA ] = useState(generateGrid());
    const [ gridB, setGridB ] = useState(generateGrid());
    const [ boats, setBoats ] = useState(standardBoats);
    const [ numberOfBoats, setNumberOfBoats ] = useState(0);
    const [ player, setPlayer ] = useState("A");
    const [ computerStrategy, setComputerStrategy ] = useState({
        next: [],
        plan: [],
        lastTry: []
    });
    const [ setup, setSetup ] = useState(true);
    const [ setupBoats, setSetupBoats ] = useState(setupBoatsList);
    const [ setupSize, setSetupSize ] = useState(10);
    
    const handleSetup = () => {
        let newBoats = Object.entries(Object.assign(setupBoats)).reduce((acc, boat) => {
            for (let i = 0; i < boat[1].number; i++) {
                acc.push(boatsObject[boat[0]]);
            }
            return acc;
        }, []);
        
        const newGame = createGame(generateGrid(setupSize, setupSize), generateGrid(setupSize, setupSize), newBoats);

        const numberOfBoats = newGame.playerA.reduce((acc, row) => {
            return acc + row.reduce((acc2, cell) => {
                return cell.isShip ? acc2 + 1 : acc2;
            }, 0)
        }, 0);

        window.scrollTo(0, 0);

        setSetup(false)
        setNumberOfBoats(numberOfBoats)
        setGridA(newGame.playerA)
        setGridB(newGame.playerB)
    }

  return (
    <div>
      <h3>Game</h3>
      <Setup 
        handleSetup={handleSetup}
      />
      <Grid 
        grid={gridA}
      />
    </div>
  );
}

export default Game;