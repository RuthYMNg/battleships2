import getStrategy from './getStrategy.js';

const format = {
    next: [],
    plan: [],
    lastTry: []
}

const computerStrategy = (inputStrategy, grid) => {

    if (!grid) {
        return inputStrategy || format;
    }

    let strategy = inputStrategy ? Object.assign(inputStrategy) : format;
    if (strategy.next.length) {
        let keepGoing = true;
        while (keepGoing && strategy.next.length) {
            if (
                strategy.next[0][0] >= 0 &&
                strategy.next[0][1] >= 0 &&
                strategy.next[0][0] < grid.length &&
                strategy.next[0][1] < grid.length
            ) {
                if (!grid[strategy.next[0][1]][[strategy.next[0][0]]].isDiscovered) {
                    if (grid[strategy.next[0][1]][[strategy.next[0][0]]].isShip) {
                        if (strategy.next[0][0] - 1 >= 0) {
                            if (!grid[strategy.next[0][1]][[strategy.next[0][0] - 1]].isDiscovered) {
                                strategy.next.push([strategy.next[0][0] - 1, strategy.next[0][1]])
                            }
                        }
                        if (strategy.next[0][0] + 1 < grid.length) {
                            if (!grid[strategy.next[0][1]][[strategy.next[0][0] + 1]].isDiscovered) {
                                strategy.next.push([strategy.next[0][0] + 1, strategy.next[0][1]])
                            }
                        }
                        if (strategy.next[0][1] - 1 >= 0) {
                            if (!grid[strategy.next[0][1] - 1][[strategy.next[0][0]]].isDiscovered) {
                                strategy.next.push([strategy.next[0][0], strategy.next[0][1] - 1])
                            }
                        }
                        if (strategy.next[0][1] + 1 < grid.length) {
                            if (!grid[strategy.next[0][1] + 1][[strategy.next[0][0]]].isDiscovered) {
                                strategy.next.push([strategy.next[0][0], strategy.next[0][1] + 1])
                            }
                        }
                    }
                    keepGoing = false;
                    let lastTry = strategy.next[0].slice();
                    strategy.next.shift();
                    strategy.lastTry = lastTry;
                    return strategy;
                } else {
                    strategy.next.shift();
                    if (strategy.next.length === 1) {
                        keepGoing = false;
                    }
                }
            } else {
                strategy.next.shift();
                if (strategy.next.length === 1) {
                    keepGoing = false;
                }
            }
        }
    }

    if (!strategy.plan.length) {
        strategy.plan = getStrategy(grid);
        strategy.plan = strategy.plan.reduce((acc, row) => {
            row.forEach(cell => {
                acc.push(cell);
            })
            return acc;
        }, []);
    }

    let keepGoing = true;
    while (keepGoing) {
        if (
            strategy.plan[0][0] >= 0 &&
            strategy.plan[0][1] >= 0 &&
            strategy.plan[0][0] < grid.length &&
            strategy.plan[0][1] < grid.length
        ) {
            if (!grid[strategy.plan[0][1]][[strategy.plan[0][0]]].isDiscovered) {
                if (grid[strategy.plan[0][1]][[strategy.plan[0][0]]].isShip) {
                    if (strategy.plan[0][0] - 1 >= 0) {
                        strategy.next.push([strategy.plan[0][0] - 1, strategy.plan[0][1]])
                    }
                    if (strategy.plan[0][0] + 1 < grid.length) {
                        strategy.next.push([strategy.plan[0][0] + 1, strategy.plan[0][1]])
                    }
                    if (strategy.plan[0][1] - 1 >= 0) {
                        strategy.next.push([strategy.plan[0][0], strategy.plan[0][1] - 1])
                    }
                    if (strategy.plan[0][1] + 1 < grid.length) {
                        strategy.next.push([strategy.plan[0][0], strategy.plan[0][1] + 1])
                    }
                }
                keepGoing = false;
                let lastTry = strategy.plan[0].slice();
                strategy.plan.shift();
                strategy.lastTry = lastTry;
                return strategy;
            } else {
                strategy.plan.shift();
            }
        } else {
            strategy.plan.shift();
        }
    }
}

export default computerStrategy;