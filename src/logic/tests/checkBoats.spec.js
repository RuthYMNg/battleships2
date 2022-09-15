import { expect } from 'chai';
import checkBoats from '../checkBoats.js';

describe('checkBoats', () => {
    it('is a function', () => {
        expect(checkBoats).to.be.a('function');
    });
    it('returns an array', () => {
        expect(Array.isArray(checkBoats())).to.equal(true);
    });
    it('returns an array of objects', () => {
        expect(checkBoats().every(boat => typeof boat === 'object')).to.equal(true);
    });
    it('returns standard boats if some boat does not have length', () => {
        const shortBoat = [
            {
                length: 0
            }
        ];
        const invisiboat = [
            {}
        ];
        const shortBoatInGroup = [
            {
                length: 2
            },
            {
                length: 5
            },
            {
                length: 0
            }
        ];
        expect(checkBoats(shortBoat).every(boat => boat.length)).to.equal(true);
        expect(checkBoats(invisiboat).every(boat => boat.length)).to.equal(true);
        expect(checkBoats(shortBoatInGroup).every(boat => boat.length)).to.equal(true);
        expect(checkBoats().every(boat => boat.length)).to.equal(true);
    });
    it('returns standard boats if some boat is too short', () => {
        const shortBoat = [
            {
                length: 1
            }
        ];
        const shortBoatInGroup = [
            {
                length: 2
            },
            {
                length: 5
            },
            {
                length: 1
            }
        ];
        expect(checkBoats(shortBoat).every(boat => boat.length > 1)).to.equal(true);
        expect(checkBoats(shortBoatInGroup).every(boat => boat.length > 1)).to.equal(true);
        expect(checkBoats().every(boat => boat.length > 1)).to.equal(true);
    });
    it('returns standard boats if some boat is too long', () => {
        const longBoat = [
            {
                length: 7
            }
        ];
        const niceBoat = [
            {
                length: 6
            }
        ];
        const longBoatInGroup = [
            {
                length: 2
            },
            {
                length: 7
            },
            {
                length: 1
            }
        ];
        expect(checkBoats(longBoat).every(boat => boat.length < 7)).to.equal(true);
        expect(checkBoats(longBoatInGroup).every(boat => boat.length < 7)).to.equal(true);
        expect(checkBoats(niceBoat).every(boat => boat.length < 7)).to.equal(true);
        expect(checkBoats().every(boat => boat.length < 7)).to.equal(true);
    });
    it('returns standard boats if there are too many boats', () => {
        const lotsOfBoats = [
            {
                length: 2
            },
            {
                length: 6
            },
            {
                length: 4
            },
            {
                length: 5
            },
            {
                length: 3
            },
            {
                length: 3
            },
            {
                length: 3
            },
            {
                length: 3
            },
            {
                length: 2
            }
        ];
        expect(checkBoats(lotsOfBoats).length < 10).to.equal(true);
    });
});