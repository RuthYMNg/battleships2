const generateGrid = (width, height) => {
    const result = [];
    width = width ? width : 10;
    height = height ? height : 10;
    for (let i = 0; i < height; i++) {
        result.push([]);
    }
    result.forEach(row => {
        for (let i = 0; i < width; i++) {
            row.push({
                isShip: false,
                isDiscovered: false,
                name: null,
                length: null
            });
        }
    });
    return result;
}   

export default generateGrid;