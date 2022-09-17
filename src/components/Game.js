import React, { useState } from 'react';
import Grid from './Grid.js';
import Setup from './Setup.js';


import standardBoats from '../logic/standardBoats.js';
import generateGrid from '../logic/generateGrid.js';

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

  return (
    <div>
      <h3>Game</h3>
      <Setup />
      <Grid 
        grid={gridA}
      />
    </div>
  );
}

export default Game;