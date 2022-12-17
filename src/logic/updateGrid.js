const updateGrid = (grid, result) => {
    if (result.dir === 'left') {
        for (let i = 0; i < result.boat.length; i++) {
            grid[result.x][result.y - i].name = result.boat.name;
            grid[result.x][result.y - i].length = result.boat.length;
            grid[result.x][result.y - i].isShip = true;
        }
    } else if (result.dir === 'right') {
        for (let i = 0; i < result.boat.length; i++) {
            grid[result.x][result.y + i].name = result.boat.name;
            grid[result.x][result.y + i].length = result.boat.length;
            grid[result.x][result.y + i].isShip = true;
        }
    } else if (result.dir === 'down') {
        for (let i = 0; i < result.boat.length; i++) {
            grid[result.x + i][result.y].name = result.boat.name;
            grid[result.x + i][result.y].length = result.boat.length;
            grid[result.x + i][result.y].isShip = true;
        }
    } else {
        for (let i = 0; i < result.boat.length; i++) {
            grid[result.x - i][result.y].name = result.boat.name;
            grid[result.x - i][result.y].length = result.boat.length;
            grid[result.x - i][result.y].isShip = true;
        }
    }
    return grid;
}

export default updateGrid