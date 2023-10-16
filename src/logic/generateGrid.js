const generateGrid = (width = 10, height = 10) => {
    const result = [];
    for (let i = 0; i < height; i++) {
        const row = [];
        for (let j = 0; j < width; j++) {
            row.push({
                isShip: false,
                isDiscovered: false,
                name: null,
                length: null
            });
        }
        result.push(row);
    }
    return result;
}

export default generateGrid;