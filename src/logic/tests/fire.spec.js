import { expect } from 'chai';
import fire from '../fire.js';
import generateGrid from '../generateGrid.js';

describe('fire', () => {
    it('is a function', () => {
        expect(fire).to.be.a('function');
    });
    it('returns null if no player', () => {
        expect(fire(null, generateGrid(), 0, 0)).to.equal(null);
    });
    it('returns null if no grid', () => {
        expect(fire('A', null, 0, 0)).to.equal(null);
    });
    it('returns null if no grid length', () => {
        expect(fire('A', [], 0, 0)).to.equal(null);
    });
    it('returns null if x is invalid', () => {
        expect(fire('A', generateGrid(), 11, 0)).to.equal(null);
    });
    it('returns null if y is invalid', () => {
        expect(fire('A', generateGrid(), 0, 11)).to.equal(null);
    });
    it('fires the right cell', () => {
        expect(fire('A', generateGrid(), 0, 0)[0][0].isDiscovered).to.equal(true);
        expect(fire('A', generateGrid(), 6, 2)[2][6].isDiscovered).to.equal(true);
        expect(fire('A', generateGrid(), 6, 2)[1][6].isDiscovered).to.equal(false);
        expect(fire('A', generateGrid(20, 20), 19, 19)[19][19].isDiscovered).to.equal(true);
    });
    it('returns an array if all present and correct', () => {
        expect(Array.isArray(fire('A', generateGrid(), 0, 0))).to.equal(true);
    });
});