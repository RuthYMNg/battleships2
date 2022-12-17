import { expect } from 'chai';
import updateGrid from '../updateGrid.js';

describe('updateGrid', () => {
    it('is a function', () => {
        expect(updateGrid).to.be.a('function');
    });
    it('returns an array of the same length passed', () => {
        const grid = [[[], [], []], [[], [], []], [[], [], []]];
        const boat = {
            name: "Destroyer",
            length: 2
        };
        const directions = {
            boat: boat,
            x: 0,
            y: 0,
            dir: "down"
        }
        const result = updateGrid(grid, directions)
        expect(result).to.have.length(3);
    });
    it('returns an array of arrays which are all the same length passed', () => {
        const grid = [[[], [], []], [[], [], []], [[], [], []]];
        const boat = {
            name: "Destroyer",
            length: 2
        };
        const directions = {
            boat: boat,
            x: 0,
            y: 0,
            dir: "down"
        }
        const result = updateGrid(grid, directions)
        expect(result[0]).to.have.length(3);
        expect(result[1]).to.have.length(3);
        expect(result[2]).to.have.length(3);
    });
    it('returns an array with the correct boats marked when going right', () => {
        const grid = [[[], [], []], [[], [], []], [[], [], []]];
        const boat = {
            name: "Destroyer",
            length: 2
        };
        const directions = {
            boat: boat,
            x: 0,
            y: 0,
            dir: "down"
        }
        const result = updateGrid(grid, directions)
        expect(result[0][0].name).to.equal("Destroyer");
        expect(result[0][1].name).to.equal("Destroyer");
        expect(result[0][2].name).to.not.equal("Destroyer");
    });
});