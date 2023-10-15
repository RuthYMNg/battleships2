const fire = (player, grid, x, y) => {
    let newGrid = JSON.parse(JSON.stringify(grid))
    if (
        !player ||
        !newGrid ||
        !newGrid.length ||
        newGrid.some(row => row.length < x) ||
        newGrid.length < y
    ) {
        return null;
    }
    
    newGrid[y][x].isDiscovered = true;
    return newGrid;
}

export default fire;