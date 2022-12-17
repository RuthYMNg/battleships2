import { expect } from 'chai';
import getStrategy from '../getStrategy.js';

describe('getStrategy', () => {
    it('is a function', () => {
        expect(getStrategy).to.be.a('function');
    });
    it('returns an array', () => {
        expect(Array.isArray(getStrategy())).to.equal(true);
    });
    it('returns an array with length if a grid is passed', () => {
        const grid = [[[], [], []], [[], [], []], [[], [], []]]
        expect(getStrategy(grid).length > 0).to.equal(true);
    });
    it.only('returns an array of arrays of pairs of numbers when there is a grid', () => {
        const grid = [[[], [], []], [[], [], []], [[], [], []]]
        const result = getStrategy(grid)
        expect(typeof result[0][0][0]).to.equal('number') ||
        expect(typeof result[0][0][1]).to.equal('number') ||
        expect(typeof result[0][1][0]).to.equal('number');
        expect(Array.isArray(result)).to.equal(true);
    });
});