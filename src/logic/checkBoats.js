const standardBoats = [
    {
        name: "Carrier",
        length: 5
    },
    {
        name: "Battleship",
        length: 4
    },
    {
        name: "Cruiser",
        length: 3
    },
    {
        name: "Submarine",
        length: 3
    },
    {
        name: "Destroyer",
        length: 2
    },
]

const checkBoats = function (boats) {
    if (
        !Array.isArray(boats) ||
        boats.some(boat => typeof boat !== 'object') ||
        boats.some(boat => !boat.length) || 
        boats.some(boat => boat.length < 2) || 
        boats.some(boat => boat.length > 6) ||
        boats.length > 9
    ) {
        return standardBoats;
    }
    return boats;
}

export default checkBoats;