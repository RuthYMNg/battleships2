const isWithinBounds = (x, y, length, grid, direction) => {
    switch (direction) {
        case "right": return y + length - 1 <= grid[0].length - 1;
        case "down": return x + length - 1 <= grid.length - 1;
        case "left": return y - length + 1 >= 0;
        case "up": return x - length + 1 >= 0;
        default: return false;
    }
}

const isOverlap = (x, y, length, grid, direction) => {
    let dx = 0, dy = 0; // the change in x and y coordinates respectively
    switch (direction) {
        case "right": dy = 1; break;
        case "down": dx = 1; break;
        case "left": dy = -1; break;
        case "up": dx = -1; break;
        default: break;
    }
    for (let i = 0; i < length; i++) {
        if (grid[x + dx * i][y + dy * i].isShip) {
            return true;
        }
    }
    return false;
}

const tryToPlace = (grid, boat, randomCoordinates, randomDirection) => {
    let [x, y] = randomCoordinates;

    if (!isWithinBounds(x, y, boat.length, grid, randomDirection) || 
        isOverlap(x, y, boat.length, grid, randomDirection)) {
        return null;
    }

    return {
        boat: boat,
        x: x,
        y: y,
        dir: randomDirection
    };
}

export { tryToPlace, isWithinBounds, isOverlap }
