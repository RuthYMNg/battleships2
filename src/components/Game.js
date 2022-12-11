import React, { useState } from 'react';
import styled from 'styled-components';
import Grid from './Grid.js';
import Setup from './Setup.js';
import Button from './Button.js';
import standardBoats from '../logic/standardBoats.js';
import boatsObject from '../logic/boatsObject.js';
import setupBoatsList from '../logic/setupBoats.js';
import generateGrid from '../logic/generateGrid.js';
import fetchComputerStrategy from '../logic/computerStrategy.js';
import fire from '../logic/fire.js';
import createGame from '../logic/createGame.js';

const GridsArea = styled.section`
  display: flex;
  justify-content: center;
`

const GridContainer = styled.section`
  margin: 3rem;
`

const Game = () => {

    const [ width, setWidth ] = useState(10);
    const [ height, setHeight ] = useState(10);
    const [ gridA, setGridA ] = useState(generateGrid());
    const [ gridB, setGridB ] = useState(generateGrid());
    const [ boats, setBoats ] = useState(standardBoats);
    const [ numberOfBoats, setNumberOfBoats ] = useState(6);
    const [ player, setPlayer ] = useState("A");
    const [ computerStrategy, setComputerStrategy ] = useState({
        next: [],
        plan: [],
        lastTry: []
    });
    const [ setup, setSetup ] = useState(true);
    const [ setupBoats, setSetupBoats ] = useState(setupBoatsList);
    const [ setupSize, setSetupSize ] = useState(10);
    const [ win, setWin ] = useState(false);
    const [ dev, setDev ] = useState(true);
    
    
    
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

    const handleFire = (x, y) => {
        const enemyGrid = player === "A" ? gridB.slice() : gridA.slice();
        const enemyPlayer = player === "A" ? "B" : "A";
        const firedGrid = fire(player, enemyGrid, y, x);
        const numberOfDiscovered = firedGrid.reduce((acc, row) => {
            return acc + row.reduce((acc2, cell) => {
                return cell.isShip && cell.isDiscovered ? acc2 + 1 : acc2;
            }, 0)
        }, 0);

        if (enemyPlayer === "A") {
          setPlayer(enemyPlayer);
          setGridA(firedGrid);
          setWin(numberOfDiscovered === numberOfBoats ? "human" : false)
        } else {
            if (numberOfDiscovered !== numberOfBoats) {
                handleComputerGo();
            } 
              setPlayer("B");
              setGridB(firedGrid);
              setWin(numberOfDiscovered === numberOfBoats ? "human" : false)
            }
        }
        

    const handleComputerGo = () => {
      if (win) {
          return;
      }

      const timer = 500 + Math.random() * 1000;

      setTimeout(() => {
          let strategy = fetchComputerStrategy(computerStrategy, gridA)

          setComputerStrategy({
              computerStrategy: strategy
          })

          const firedGrid = fire(player, gridA.slice(), strategy.lastTry[0], strategy.lastTry[1])

          setGridA(firedGrid);
          setPlayer("A");
          setWin(firedGrid.reduce((acc, row) => {
            return acc + row.reduce((acc2, cell) => {
                return cell.isShip && cell.isDiscovered ? acc2 + 1 : acc2;
            }, 0);

        }, 0) === numberOfBoats ? "computer" : false);

      }, timer);
  }

  const reset = () => {
    const newGame = createGame(generateGrid(), generateGrid())
    const numberOfBoats = newGame.playerA.reduce((acc, row) => {
        return acc + row.reduce((acc2, cell) => {
            return cell.isShip ? acc2 + 1 : acc2;
        }, 0)
    }, 0);
    setGridA(newGame.playerA);
    setGridB(newGame.playerB);
    setNumberOfBoats(numberOfBoats);
    setBoats([]);
    setPlayer("A");
    setComputerStrategy({
      next: [],
      plan: [],
      lastTry: []
    });
    setWin(false);
    setSetup(true);
  }

  const toggleDev = () => {
    setDev(!dev);
  }

  const handleUpdateGridSize = (newSize) => {
    setSetupSize(newSize);
}

  return (
    <div>
      {setup ?
        <Setup 
          handleSetup={handleSetup}
          handleUpdateGridSize={handleUpdateGridSize}
          size={setupSize}
        /> : <></>
      }
      {!setup ? 
        <GridsArea>
          <GridContainer>
            <h3>You</h3>
            <Grid 
              player="human"
              grid={gridA}
              height={height}
              width={width}
              win={win}
              turn={player}
              handleFire={handleFire}
            />
          </GridContainer>
          <GridContainer>
            <h3>Computer</h3>
            <Grid 
              player="computer"
              grid={gridB}
              height={height}
              width={width}
              win={win}
              turn={player}
              handleFire={handleFire}
              dev={dev}
            />
          </GridContainer>
        </GridsArea> : <></>
      }
      
      <section>
      {win ? <div>
                <p>{win === "human" ? "YOU WIN!" : "THE COMPUTER HAS DEFEATED YOU :("}</p>
                <Button onClick={reset}>Create a new game</Button>
            </div> : player === 'A' ? <h5 className='selectedPlayer'>Your turn</h5> : <h5 className='selectedPlayer'>Computer thinking</h5>}
            {win ? <div></div> : <Button>Quit</Button>}
      </section>
      <section>
        <Button onClick={toggleDev}>USE DEV</Button>
      </section>
    </div>
  );
}

export default Game;