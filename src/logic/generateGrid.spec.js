import { expect } from 'chai';
import generateGrid from './generateGrid.js';

describe('generateGrid', () => {
    it('is a function', () => {
        expect(generateGrid).to.be.a('function');
    });
    it('returns an array', () => {
        expect(Array.isArray(generateGrid())).to.equal(true);
    });
    it('returns a 10x10 board when not given any input', () => {
        expect(generateGrid().length).to.equal(10);
    });
    it('returns a board as wide as we specify', () => {
        expect(generateGrid(10, 14).every(el => el.length === 10)).to.equal(true);
        expect(generateGrid(14, 9).every(el => el.length === 14)).to.equal(true);
    });
    it('returns a board as high as we specify', () => {
        expect(generateGrid(10, 14).length).to.equal(14);
        expect(generateGrid(15, 18).length).to.equal(18);
    });
    it('creates the correct size of board', () => {
        expect(generateGrid(10, 14).every(el => el.length === 10)).to.equal(true);
        expect(generateGrid(14, 10).length).to.equal(10);
    });
    it('each cell has an isShip boolean', () => {
        expect(generateGrid()[0][0]).to.haveOwnProperty("isShip")
        expect(generateGrid()[0][0].isShip).to.be.a("boolean")
    });
    it('each cell has an isDiscovered boolean', () => {
        expect(generateGrid()[0][0]).to.haveOwnProperty("isDiscovered")
        expect(generateGrid()[0][0].isDiscovered).to.be.a("boolean")
    });
    it('each cell has a length property', () => {
        expect(generateGrid()[0][0]).to.haveOwnProperty("length")
        expect(generateGrid()[0][0].length).to.equal(null)
    });
    it('each cell has a name property', () => {
        expect(generateGrid()[0][0]).to.haveOwnProperty("name")
        expect(generateGrid()[0][0].name).to.equal(null)
    });
});