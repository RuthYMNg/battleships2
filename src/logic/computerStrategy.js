import getStrategy from './getStrategy.js';

const format = {
    next: [],
    plan: [],
    lastTry: [],
    firstHit: null,
    direction: null,
    boatHits: []
}

const isCellValid = (cell, grid) => {
    return cell[0] >= 0 && cell[1] >= 0 && cell[0] < grid.length && cell[1] < grid.length;
}

const getAdjacentCells = (cell) => {
    return [
        [cell[0] - 1, cell[1]], // above
        [cell[0] + 1, cell[1]], // below
        [cell[0], cell[1] - 1], // left
        [cell[0], cell[1] + 1]  // right
    ];
}

const processCell = (cell, grid, strategy) => {
    if (isCellValid(cell, grid) && !grid[cell[1]][cell[0]].isDiscovered) {

        // Check if ship
        if (grid[cell[1]][cell[0]].isShip) {
            // Add current cell to the list of hit boat positions
            strategy.boatHits.unshift([...cell])
            
            // Check if this is the first hit on a boat; if so, store its position
            if (!strategy.firstHit) {
                strategy.firstHit = [...cell]   
            }
            
            // If there are two boat hits, determine the direction of the boat
            if(strategy.boatHits.length === 2) {
                if (strategy.boatHits[0][0] === strategy.boatHits[1][0]) {
                    strategy.direction = "vertical"
                } else {
                    strategy.direction = "horizontal"
                }
            }

            const adjacentCells = getAdjacentCells(cell);

            // If the direction of the boat is identified as vertical, only consider vertical adjacent cells for further targeting
            if (strategy.direction === "vertical") {
                adjacentCells.forEach(adjCell => {
                    if (
                            isCellValid(adjCell, grid) && 
                            !grid[adjCell[1]][adjCell[0]].isDiscovered &&
                            adjCell[0] === strategy.firstHit[0]
                        ) {
                        strategy.next.push(adjCell);
                    }
                });
            }
            // If the direction of the boat is identified as horizontal, only consider horizontal adjacent cells for further targeting
            else if (strategy.direction === "horizontal") {
                adjacentCells.forEach(adjCell => {
                    if (
                            isCellValid(adjCell, grid) && 
                            !grid[adjCell[1]][adjCell[0]].isDiscovered &&
                            adjCell[1] === strategy.firstHit[1]
                        ) {
                        strategy.next.push(adjCell);
                    }
                });
            }
            // else consider all adjacent cells for targeting
            else {
                adjacentCells.forEach(adjCell => {
                    if (isCellValid(adjCell, grid) && !grid[adjCell[1]][adjCell[0]].isDiscovered) {
                        strategy.next.push(adjCell);
                    }
                });
            }
        }
        
        // Store the current cell as the last tried cell
        strategy.lastTry = [...cell];

        // Reset the strategy if a direction was determined but there are no next cells to target
        if (strategy.direction && !strategy.next.length) {
            strategy.firstHit = null;
            strategy.boatHits = [];
            strategy.direction = null;
        }
        return true;
    }
    
    // Reset the strategy if a direction was determined but there are no next cells to target
    if (strategy.direction && !strategy.next.length) {
        strategy.firstHit = null;
        strategy.boatHits = [];
        strategy.direction = null;
    }
    
    return false;
}


const computerStrategy = (inputStrategy, grid) => {
    
    if (inputStrategy.computerStrategy) {
        inputStrategy = inputStrategy.computerStrategy;
    }

    if (!grid) {
        return inputStrategy || format;
    }

    let strategy = inputStrategy ? { ...inputStrategy } : format;

    while (strategy.next.length) {
        if (processCell(strategy.next[0], grid, strategy)) {
            strategy.next.shift();
            return strategy;
        }
        strategy.next.shift();
    }

    if (!strategy.plan.length) {
        strategy.plan = getStrategy(grid);
        strategy.plan = strategy.plan.flat();
    }

    while (strategy.plan.length) {
        if (processCell(strategy.plan[0], grid, strategy)) {
            strategy.plan.shift();
            return strategy;
        }
        strategy.plan.shift();
    }
}

export default computerStrategy;
