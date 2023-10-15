const fire = (player, grid, x, y) => {
    console.log("FIRING ON X = ",x,"Y = ",y);
    
    
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