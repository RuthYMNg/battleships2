import { expect } from 'chai';
import generateRandomCoordinates from '../generateRandomCoordinates.js';

describe('generateRandomCoordinates', () => {
    it('is a function', () => {
        expect(generateRandomCoordinates).to.be.a('function');
    });
    it('returns an array', () => {
        expect(Array.isArray(generateRandomCoordinates())).to.equal(true);
    });
    it('returns an array of length 2', () => {
        expect(generateRandomCoordinates().length).to.equal(2);
    });
    it('returns 2 numbers', () => {
        expect(generateRandomCoordinates()[0]).to.be.a('number')
        expect(generateRandomCoordinates()[1]).to.be.a('number')
    });
});