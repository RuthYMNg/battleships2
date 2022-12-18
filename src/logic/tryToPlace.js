const tryToPlace = (grid, boat, randomCoordinates, randomDirection) => {
    let x = randomCoordinates[0];
    let y = randomCoordinates[1];

    const result = {
        boat: boat,
        x: x,
        y: y,
        dir: randomDirection
    };

    if (randomDirection === "right") {
        if (y + boat.length - 1 <= grid[0].length - 1) {
            let containsShip = [...Array(boat.length).keys()].map(num => grid[x][y+num]).some(cell => cell.isShip);
            if (!containsShip) {
                return result;
            } 
        }
    }

    if (randomDirection === "down") {
        if (x + boat.length - 1 <= grid.length - 1) {
            let containsShip = [...Array(boat.length).keys()].map(num => grid[x+num][y]).some(cell => cell.isShip);
            if (!containsShip) {
                return result;
            } 
        }
    }

    if (randomDirection === "left") {
        if (y - (boat.length - 1) >= 0) {
            let containsShip = [...Array(boat.length).keys()].map(num => grid[x][y-num]).some(cell => cell.isShip);
            if (!containsShip) {
                return result;
            } 
        }
    }

    if (randomDirection === "up") {
        if (x - (boat.length - 1) >= 0) {
            let containsShip = [...Array(boat.length).keys()].map(num => grid[x - num][y]).some(cell => cell.isShip);
            if (!containsShip) {
                return result;
            } 
        }
    }

    return null;
}

export default tryToPlace;