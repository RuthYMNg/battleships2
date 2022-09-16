import generateRandomCoordinates from './generateRandomCoordinates.js';

const tryToPlace = (grid, boat) => {
    let randomCoordinates = generateRandomCoordinates(grid[0].length, grid.length);
    let x = randomCoordinates[0];
    let y = randomCoordinates[1];
    let num = Math.random();
    let randomDirection = num < 0.25 ? "up" : num < 0.5 ? "right" : num < 0.75 ? "down" : "left"

    if (randomDirection === 'up') {
        if (y - boat.length < 0) {
            randomDirection = "right";
        } else {
            if (boat.length === 5) {
                if (grid[x][y].isShip || grid[x][y - 1].isShip|| grid[x][y - 2].isShip|| grid[x][y - 2].isShip|| grid[x][y - 4].isShip) {
                    randomDirection = "right";
                } else { 
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 4) {
                if (grid[x][y].isShip || grid[x][y - 1].isShip|| grid[x][y - 2].isShip|| grid[x][y - 2].isShip) {
                    randomDirection = "right";
                } else { 
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 3) {
                if (grid[x][y].isShip || grid[x][y - 1].isShip|| grid[x][y - 2].isShip) {
                    randomDirection = "right";
                } else { 
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 2) {
                if (grid[x][y].isShip || grid[x][y - 1].isShip) {
                    randomDirection = "right";
                } else { 
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            }     
        }
    }

    if (randomDirection === 'right') {
        if (x + boat.length > grid[0].length) {
            randomDirection = "down";
        } else {
            if (boat.length === 5) {
                if (grid[x][y].isShip || grid[x + 1][y].isShip|| grid[x + 2][y].isShip|| grid[x + 3][y].isShip|| grid[x + 4][y].isShip) {
                    randomDirection = "down";
                } else { 
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 4) {
                if (grid[x][y].isShip || grid[x + 1][y].isShip|| grid[x + 1][y].isShip|| grid[x + 3][y].isShip) {
                    randomDirection = "down";
                } else { 
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 3) {
                if (grid[x][y].isShip || grid[x + 1][y].isShip|| grid[x + 2][y].isShip) {
                    randomDirection = "down";
                } else { 
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 2) {
                if (grid[x][y].isShip || grid[x + 1][y].isShip) {
                    randomDirection = "down";
                } else { 
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            }     
        }
    }

    if (randomDirection === 'down') {
        if (y + boat.length > grid.length) {
            randomDirection = "left";
        } else {
            if (boat.length === 5) {
                if (grid[x][y].isShip || grid[x][y + 1].isShip|| grid[x][y + 2].isShip|| grid[x][y + 3].isShip|| grid[x][y + 4].isShip) {
                    randomDirection = "left";
                } else { 
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 4) {
                if (grid[x][y].isShip || grid[x][y + 1].isShip|| grid[x][y + 2].isShip|| grid[x][y + 3].isShip) {
                    randomDirection = "left";
                } else { 
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 3) {
                if (grid[x][y].isShip || grid[x][y + 1].isShip|| grid[x][y + 2].isShip) {
                    randomDirection = "left";
                } else { 
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 2) {
                if (grid[x][y].isShip || grid[x][y + 1].isShip) {
                    randomDirection = "left";
                } else { 
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            }     
        }
    }

    if (randomDirection === 'left') {
        if (x - boat.length < 0) {
            randomDirection = "up";
        } else {
            if (boat.length === 5) {
                if (grid[x][y].isShip || grid[x - 1][y].isShip|| grid[x - 2][y].isShip|| grid[x - 3][y].isShip|| grid[x - 4][y].isShip) {
                    randomDirection = "up";
                } else { 
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 4) {
                if (grid[x][y].isShip || grid[x - 1][y].isShip|| grid[x - 1][y].isShip|| grid[x - 3][y].isShip) {
                    randomDirection = "up";
                } else { 
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 3) {
                if (grid[x][y].isShip || grid[x - 1][y].isShip|| grid[x - 2][y].isShip) {
                    randomDirection = "up";
                } else { 
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 2) {
                if (grid[x][y].isShip || grid[x - 1][y].isShip) {
                    randomDirection = "up";
                } else { 
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            }     
        }
    }

    if (randomDirection === 'up') {
        if (y - boat.length < 0) {
            randomDirection = "right";
        } else {
            if (boat.length === 5) {
                if (grid[x][y].isShip || grid[x][y - 1].isShip|| grid[x][y - 2].isShip|| grid[x][y - 2].isShip|| grid[x][y - 4].isShip) {
                    randomDirection = "right";
                } else { 
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 4) {
                if (grid[x][y].isShip || grid[x][y - 1].isShip|| grid[x][y - 2].isShip|| grid[x][y - 2].isShip) {
                    randomDirection = "right";
                } else { 
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 3) {
                if (grid[x][y].isShip || grid[x][y - 1].isShip|| grid[x][y - 2].isShip) {
                    randomDirection = "right";
                } else { 
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 2) {
                if (grid[x][y].isShip || grid[x][y - 1].isShip) {
                    randomDirection = "right";
                } else { 
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            }     
        }
    }

    if (randomDirection === 'right') {
        if (x + boat.length > grid[0].length) {
            randomDirection = "down";
        } else {
            if (boat.length === 5) {
                if (grid[x][y].isShip || grid[x + 1][y].isShip|| grid[x + 2][y].isShip|| grid[x + 3][y].isShip|| grid[x + 4][y].isShip) {
                    randomDirection = "down";
                } else { 
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 4) {
                if (grid[x][y].isShip || grid[x + 1][y].isShip|| grid[x + 1][y].isShip|| grid[x + 3][y].isShip) {
                    randomDirection = "down";
                } else { 
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 3) {
                if (grid[x][y].isShip || grid[x + 1][y].isShip|| grid[x + 2][y].isShip) {
                    randomDirection = "down";
                } else { 
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 2) {
                if (grid[x][y].isShip || grid[x + 1][y].isShip) {
                    randomDirection = "down";
                } else { 
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            }     
        }
    }

    if (randomDirection === 'down') {
        if (y + boat.length > grid.length) {
            randomDirection = "left";
        } else {
            if (boat.length === 5) {
                if (grid[x][y].isShip || grid[x][y + 1].isShip|| grid[x][y + 2].isShip|| grid[x][y + 3].isShip|| grid[x][y + 4].isShip) {
                    randomDirection = "left";
                } else { 
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 4) {
                if (grid[x][y].isShip || grid[x][y + 1].isShip|| grid[x][y + 2].isShip|| grid[x][y + 3].isShip) {
                    randomDirection = "left";
                } else { 
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 3) {
                if (grid[x][y].isShip || grid[x][y + 1].isShip|| grid[x][y + 2].isShip) {
                    randomDirection = "left";
                } else { 
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            } else if (boat.length === 2) {
                if (grid[x][y].isShip || grid[x][y + 1].isShip) {
                    randomDirection = "left";
                } else { 
                    return {
                        boat: boat,
                        x: x,
                        y: y,
                        dir: randomDirection
                    }
                }
            }     
        }
    }

    return null;
}

export default tryToPlace;