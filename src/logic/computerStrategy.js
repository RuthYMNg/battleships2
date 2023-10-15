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

const allAdjacentCellsDiscoveredAndNotShip = (cell, grid) => {
    const adjacentCells = getAdjacentCells(cell);
    return adjacentCells.every(adjCell => 
        !isCellValid(adjCell, grid) || 
        (grid[adjCell[1]][adjCell[0]].isDiscovered && !grid[adjCell[1]][adjCell[0]].isShip)
    );
}

const allAdjacentCellsDiscovered = (cell, grid) => {
    const adjacentCells = getAdjacentCells(cell);
    return adjacentCells.every(adjCell => 
        !isCellValid(adjCell, grid) || 
        grid[adjCell[1]][adjCell[0]].isDiscovered
    );
};

const createFinalStrategy = (grid) => {
    console.log('&&&&&&&&&&& FINAL STRAT');
    
    return grid.reduce((acc, row, i) => {
        row.forEach((cell, j) => {
            if (!cell.isDiscovered) {
                acc.push([i, j]);
            }
        });
        return acc; 
    }, []); 
}

const isAdjacentToDiscoveredShip = (cell, grid) => {
    const adjacentCells = getAdjacentCells(cell);
    return adjacentCells.some(adjCell => 
        isCellValid(adjCell, grid) && 
        grid[adjCell[1]][adjCell[0]].isDiscovered && 
        grid[adjCell[1]][adjCell[0]].isShip
    );
}

const isPartOfUndiscoveredRowOrColumn = (cell, grid) => {
    const leftNeighbor = [cell[0], cell[1] - 1];
    const rightNeighbor = [cell[0], cell[1] + 1];
    return isCellValid(leftNeighbor, grid) && !grid[leftNeighbor[1]][leftNeighbor[0]].isDiscovered &&
           isCellValid(rightNeighbor, grid) && !grid[rightNeighbor[1]][rightNeighbor[0]].isDiscovered;
}

function countUndiscoveredShips(grid) {
    let count = 0;
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if(grid[i][j].isShip && !grid[i][j].isDiscovered) {
                count++;
            }
        }
    }
    return count;
}

function prioritiseStrategyPlan(strategy, grid) {
    console.log("**************************************************PRIORITISTING");
    
    if (countUndiscoveredShips(grid) === 2) {
        strategy.plan.sort((a, b) => {
            const aCell = (a && grid[a[1]] && grid[a[1]][a[0]]) ? grid[a[1]][a[0]] : null;
            const bCell = (b && grid[b[1]] && grid[b[1]][b[0]]) ? grid[b[1]][b[0]] : null;

            const aIsDiscovered = aCell ? aCell.isDiscovered : false;
            const bIsDiscovered = bCell ? bCell.isDiscovered : false;

            if (aIsDiscovered && !bIsDiscovered) return 1; 
            if (!aIsDiscovered && bIsDiscovered) return -1;

            const aPriority2 = isPartOfUndiscoveredRowOrColumn(a, grid) ? 1 : 0;
            const bPriority2 = isPartOfUndiscoveredRowOrColumn(b, grid) ? 1 : 0;

            const aAdjacentToShip = isAdjacentToDiscoveredShip(a, grid) ? 1 : 0;
            const bAdjacentToShip = isAdjacentToDiscoveredShip(b, grid) ? 1 : 0;

            // Combine the checks for priority
            const aFinalPriority = aPriority2 * 2 + aAdjacentToShip; 
            const bFinalPriority = bPriority2 * 2 + bAdjacentToShip;

            return bFinalPriority - aFinalPriority; 
        });
    }
    return null;
}





const processCell = (cell, grid, strategy) => {

    let updatedStrategy = JSON.parse(JSON.stringify(strategy));
    if (
        isCellValid(cell, grid) && 
        !grid[cell[1]][cell[0]].isDiscovered &&
        !allAdjacentCellsDiscoveredAndNotShip(cell,grid)
    ) {

        // Check if ship
        if (grid[cell[1]][cell[0]].isShip) {
            // Add current cell to the list of hit boat positions
            updatedStrategy.boatHits.unshift([...cell])
            
            // Check if this is the first hit on a boat; if so, store its position
            if (!updatedStrategy.firstHit) {
                updatedStrategy.firstHit = [...cell]   
            }
            
            // If there are two boat hits, determine the direction of the boat
            if(updatedStrategy.boatHits.length === 2) {
                if (updatedStrategy.boatHits[0][0] === updatedStrategy.boatHits[1][0]) {
                    updatedStrategy.direction = "vertical"
                } else {
                    updatedStrategy.direction = "horizontal"
                }
            }

            const adjacentCells = getAdjacentCells(cell);

            // If the direction of the boat is identified as vertical, only consider vertical adjacent cells for further targeting
            if (updatedStrategy.direction === "vertical") {
                adjacentCells.forEach(adjCell => {
                    if (
                            isCellValid(adjCell, grid) && 
                            !grid[adjCell[1]][adjCell[0]].isDiscovered &&
                            adjCell[0] === updatedStrategy.firstHit[0]
                        ) {
                        updatedStrategy.next.push(adjCell);
                    }
                });
            }
            // If the direction of the boat is identified as horizontal, only consider horizontal adjacent cells for further targeting
            else if (updatedStrategy.direction === "horizontal") {
                adjacentCells.forEach(adjCell => {
                    if (
                            isCellValid(adjCell, grid) && 
                            !grid[adjCell[1]][adjCell[0]].isDiscovered &&
                            adjCell[1] === updatedStrategy.firstHit[1]
                        ) {
                        updatedStrategy.next.push(adjCell);
                    }
                });
            }
            // else consider all adjacent cells for targeting
            else {
                adjacentCells.forEach(adjCell => {
                    if (isCellValid(adjCell, grid) && !grid[adjCell[1]][adjCell[0]].isDiscovered) {
                        updatedStrategy.next.push(adjCell);
                    }
                });
            }
        }
        
        // Store the current cell as the last tried cell
        updatedStrategy.lastTry = [...cell];

        const lastHitCell = updatedStrategy.boatHits.length ? updatedStrategy.boatHits[0] : null;

        // Reset the updatedStrategy if a direction was determined but there are no next cells to target
        if (
            updatedStrategy.direction && 
            updatedStrategy.next.length < 2 &&
            (
                !(cell[0] === lastHitCell[0] && cell[1] === lastHitCell[1]) ||
                allAdjacentCellsDiscovered(cell, grid)
            )
            ) {
            console.log("RESETTING NOW.");
            updatedStrategy.firstHit = null;
            updatedStrategy.boatHits = [];
            updatedStrategy.direction = null;
        }
        console.log("updatedStrategy IS 1", updatedStrategy);
        
        return {strategy: updatedStrategy, value: true};
    }
    const lastHitCell = updatedStrategy.boatHits.length ? updatedStrategy.boatHits[0] : null;
    // Reset the updatedStrategy if a direction was determined but there are no next cells to target
    if (
        updatedStrategy.direction && 
        updatedStrategy.next.length < 2 &&
        (
            !(cell[0] === lastHitCell[0] && cell[1] === lastHitCell[1]) ||
            allAdjacentCellsDiscovered(cell, grid)
        )
        ) {
        console.log("RESETTING NOW.");
        updatedStrategy.firstHit = null;
        updatedStrategy.boatHits = [];
        updatedStrategy.direction = null;
    }
    console.log("updatedStrategy IS 2", strategy);

    return {strategy: updatedStrategy, value: false};
}


const computerStrategy = (inputStrategy, grid) => {
    console.log("**********NEW*********");
    
    
    if (inputStrategy.computerStrategy) {
        inputStrategy = inputStrategy.computerStrategy;
    }

    if (!grid) {
        return inputStrategy || format;
    }

    let strategy = inputStrategy ? JSON.parse(JSON.stringify(inputStrategy)) : format;

    prioritiseStrategyPlan(strategy, grid);

    while (strategy.next.length) {
        console.log('we are processing strategy next', strategy.next[0]);
        let processed = processCell(strategy.next[0], grid, strategy);
        if (processed.value) {
            strategy = processed.strategy;
            if (
                strategy.direction && 
                strategy.next.length < 2
                ) {
                console.log("RESETTING NOW.");
                strategy.firstHit = null;
                strategy.boatHits = [];
                strategy.direction = null;
            }
            strategy.next.shift();
            console.log("here's the final strategy!", strategy);

            return strategy;
        }
        strategy.next.shift();
    }

    if (strategy.plan.length < 2) {
        console.log('NEW STRAT &&&&&&&&&&&&&');
        
        strategy.plan = getStrategy(grid);
        strategy.plan = strategy.plan.flat();
    }

    while (strategy.plan.length) {
        console.log('we are processing strategy plan', strategy.plan[0]);
        let processed = processCell(strategy.plan[0], grid, strategy);
        
        if (processed.value) {
            strategy = processed.strategy;
            strategy.plan.shift();
            console.log("here's the final strategy!", strategy);
            
            return strategy;
        }
        strategy.plan.shift();
    }

    if (strategy.plan.length < 2) {
        strategy.plan = createFinalStrategy(grid).sort((a, b) => {
            const aPriority = isAdjacentToDiscoveredShip(a, grid) ? 1 : 0;
            const bPriority = isAdjacentToDiscoveredShip(b, grid) ? 1 : 0;
            return bPriority - aPriority;
        });

        while (strategy.plan.length) {
            console.log('we are processing strategy plan', strategy.plan[0]);
            let processed = processCell(strategy.plan[0], grid, strategy);
            
            if (processed.value) {
                strategy = processed.strategy;
                strategy.plan.shift();
                console.log("here's the final strategy!", strategy);
                
                return strategy;
            }
            strategy.plan.shift();
        }
    }
    console.log(strategy);
    
    return strategy;
}

export default computerStrategy;
