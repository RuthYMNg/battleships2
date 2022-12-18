import { expect } from 'chai';
import tryToPlace from '../tryToPlace.js';
import generateGrid from '../generateGrid.js';

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

describe('tryToPlace', () => {
    it('is a function', () => {
        expect(tryToPlace).to.be.a('function');
    });
    it('when going right, it returns a result when the ship fits in the grid', () => {
        const grid  = generateGrid();
        const destroyer = standardBoats[4];
        const result1 = tryToPlace(grid, destroyer, [0, 0], "right");
        const result2 = tryToPlace(grid, destroyer, [0, 8], "right");
        const result3 = tryToPlace(grid, destroyer, [3, 8], "right");
        const result4 = tryToPlace(grid, destroyer, [9, 8], "right");
        expect(result1).to.not.eql(null);
        expect(result2).to.not.eql(null);
        expect(result3).to.not.eql(null);
        expect(result4).to.not.eql(null);
    });
    it('when going right, it does not return a result when the ship does not fit in the grid', () => {
        const grid  = generateGrid();
        const destroyer = standardBoats[4];
        const result1 = tryToPlace(grid, destroyer, [0, 9], "right");
        const result2 = tryToPlace(grid, destroyer, [1, 9], "right");
        const result3 = tryToPlace(grid, destroyer, [3, 9], "right");
        const result4 = tryToPlace(grid, destroyer, [9, 9], "right");
        expect(result1).to.eql(null);
        expect(result2).to.eql(null);
        expect(result3).to.eql(null);
        expect(result4).to.eql(null);
    });
    it('when going right, it does return a result when a ship is in the way', () => {
        const grid  = generateGrid();
        grid[0][5].isShip = true;
        const destroyer = standardBoats[4];
        const result1 = tryToPlace(grid, destroyer, [0, 4], "right");
        const result2 = tryToPlace(grid, destroyer, [0, 5], "right");
        const result3 = tryToPlace(grid, destroyer, [0, 3], "right");
        expect(result1).to.eql(null);
        expect(result2).to.eql(null);
        expect(result3).to.not.eql(null);
    });
    it('when going down, it returns a result when the ship fits in the grid', () => {
        const grid  = generateGrid();
        const destroyer = standardBoats[4];
        const result1 = tryToPlace(grid, destroyer, [0, 0], "down");
        const result2 = tryToPlace(grid, destroyer, [8, 0], "down");
        const result3 = tryToPlace(grid, destroyer, [8, 8], "down");
        const result4 = tryToPlace(grid, destroyer, [8, 9], "down");
        expect(result1).to.not.eql(null);
        expect(result2).to.not.eql(null);
        expect(result3).to.not.eql(null);
        expect(result4).to.not.eql(null);
    });
    it('when going down, it does not return a result when the ship does not fit in the grid', () => {
        const grid  = generateGrid();
        const destroyer = standardBoats[4];
        const result1 = tryToPlace(grid, destroyer, [9, 0], "down");
        const result2 = tryToPlace(grid, destroyer, [9, 1], "down");
        const result3 = tryToPlace(grid, destroyer, [9, 8], "down");
        const result4 = tryToPlace(grid, destroyer, [9, 9], "down");
        expect(result1).to.eql(null);
        expect(result2).to.eql(null);
        expect(result3).to.eql(null);
        expect(result4).to.eql(null);
    });
    it('when going down, it does return a result when a ship is in the way', () => {
        const grid  = generateGrid();
        grid[5][0].isShip = true;
        const destroyer = standardBoats[4];
        const result1 = tryToPlace(grid, destroyer, [4, 0], "down");
        const result2 = tryToPlace(grid, destroyer, [5, 0], "down");
        const result3 = tryToPlace(grid, destroyer, [3, 0], "down");
        expect(result1).to.eql(null);
        expect(result2).to.eql(null);
        expect(result3).to.not.eql(null);
    });
    it('when going left, it returns a result when the ship fits in the grid', () => {
        const grid  = generateGrid();
        const destroyer = standardBoats[4];
        const result1 = tryToPlace(grid, destroyer, [0, 9], "left");
        const result2 = tryToPlace(grid, destroyer, [0, 1], "left");
        const result3 = tryToPlace(grid, destroyer, [9, 5], "left");
        const result4 = tryToPlace(grid, destroyer, [9, 1], "left");
        expect(result1).to.not.eql(null);
        expect(result2).to.not.eql(null);
        expect(result3).to.not.eql(null);
        expect(result4).to.not.eql(null);
    });
    it('when going left, it does not return a result when the ship does not fit in the grid', () => {
        const grid  = generateGrid();
        const destroyer = standardBoats[4];
        const result1 = tryToPlace(grid, destroyer, [0, 0], "left");
        const result2 = tryToPlace(grid, destroyer, [1, 0], "left");
        const result3 = tryToPlace(grid, destroyer, [5, 0], "left");
        const result4 = tryToPlace(grid, destroyer, [9, 0], "left");
        expect(result1).to.eql(null);
        expect(result2).to.eql(null);
        expect(result3).to.eql(null);
        expect(result4).to.eql(null);
    });
    it('when going left, it does return a result when a ship is in the way', () => {
        const grid  = generateGrid();
        grid[0][5].isShip = true;
        const destroyer = standardBoats[4];
        const result1 = tryToPlace(grid, destroyer, [0, 5], "left");
        const result2 = tryToPlace(grid, destroyer, [0, 6], "left");
        const result3 = tryToPlace(grid, destroyer, [0, 4], "left");
        expect(result1).to.eql(null);
        expect(result2).to.eql(null);
        expect(result3).to.not.eql(null);
    });
    it('when going up, it returns a result when the ship fits in the grid', () => {
        const grid  = generateGrid();
        const destroyer = standardBoats[4];
        const result1 = tryToPlace(grid, destroyer, [9, 0], "up");
        const result2 = tryToPlace(grid, destroyer, [9, 0], "up");
        const result3 = tryToPlace(grid, destroyer, [1, 8], "up");
        const result4 = tryToPlace(grid, destroyer, [1, 9], "up");
        expect(result1).to.not.eql(null);
        expect(result2).to.not.eql(null);
        expect(result3).to.not.eql(null);
        expect(result4).to.not.eql(null);
    });
    it('when going up, it does not return a result when the ship does not fit in the grid', () => {
        const grid  = generateGrid();
        const destroyer = standardBoats[4];
        const result1 = tryToPlace(grid, destroyer, [0, 0], "up");
        const result2 = tryToPlace(grid, destroyer, [0, 1], "up");
        const result3 = tryToPlace(grid, destroyer, [0, 8], "up");
        const result4 = tryToPlace(grid, destroyer, [0, 9], "up");
        expect(result1).to.eql(null);
        expect(result2).to.eql(null);
        expect(result3).to.eql(null);
        expect(result4).to.eql(null);
    });
    it('when going up, it does return a result when a ship is in the way', () => {
        const grid  = generateGrid();
        grid[5][0].isShip = true;
        const destroyer = standardBoats[4];
        const result1 = tryToPlace(grid, destroyer, [6, 0], "up");
        const result2 = tryToPlace(grid, destroyer, [5, 0], "up");
        const result3 = tryToPlace(grid, destroyer, [7, 0], "up");
        expect(result1).to.eql(null);
        expect(result2).to.eql(null);
        expect(result3).to.not.eql(null);
    });
    it('returns an object', () => {
        const grid  = generateGrid();
        const destroyer = standardBoats[4];
        const result = tryToPlace(grid, destroyer, [0, 0], "right");
        expect(typeof result).to.eql("object");
    });
    it('returns an object with four properties', () => {
        const grid  = generateGrid();
        const destroyer = standardBoats[4];
        const result = tryToPlace(grid, destroyer, [0, 0], "right");
        expect(result).to.haveOwnProperty("boat");
        expect(result).to.haveOwnProperty("x");
        expect(result).to.haveOwnProperty("y");
        expect(result).to.haveOwnProperty("dir");
    });
});
