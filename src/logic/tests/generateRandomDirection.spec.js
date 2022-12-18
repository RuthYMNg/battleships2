import { expect } from 'chai';
import generateRandomDirection from '../generateRandomDirection.js';

describe('generateRandomDirection', () => {
    it('is a function', () => {
        expect(generateRandomDirection).to.be.a('function');
    });
    it('returns a string', () => {
        expect(generateRandomDirection()).to.be.a('string');
    });
});