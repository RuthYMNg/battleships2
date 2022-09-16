import { expect } from 'chai';
import computerStrategy from '../computerStrategy.js';

describe('computerStrategy', () => {
    it('is a function', () => {
        expect(computerStrategy).to.be.a('function');
    });
    it('returns an object', () => {
        expect(typeof computerStrategy()).to.equal('object');
    });
    it('has three key value pairs', () => {
        expect(computerStrategy()).to.haveOwnProperty('next');
        expect(computerStrategy()).to.haveOwnProperty('plan');
        expect(computerStrategy()).to.haveOwnProperty('lastTry');
    });
    it('has values which are all arrays', () => {
        expect(Array.isArray(computerStrategy().next)).to.equal(true);
        expect(Array.isArray(computerStrategy().plan)).to.equal(true);
        expect(Array.isArray(computerStrategy().lastTry)).to.equal(true);
    });
    it('returns default if there is no grid', () => {
        const input = {
            next: [],
            plan: [],
            lastTry: []
        }
        expect(computerStrategy(input)).to.equal(input);
        expect(computerStrategy(input)).to.equal(input);
        expect(computerStrategy(input)).to.equal(input);
    });
    it('returns a plan if there is none', () => {
        const strategy = {
            next: [],
            plan: [],
            lastTry: []
        }
        const grid = [
            [
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}
            ],
            [
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}
            ],
            [
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}
            ],
            [
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}
            ],
            [
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}
            ],
            [
                {isShip: true, isDiscovered: false}, 
                {isShip: true, isDiscovered: false}, 
                {isShip: true, isDiscovered: false}, 
                {isShip: true, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}
            ],
            [
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}
            ],
            [
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}
            ]
        ];
        expect(computerStrategy(strategy, grid).plan.length > 0).to.equal(true);
    });
    it('fires the planned cell', () => {
        const strategy = {
            next: [],
            plan: [[0, 0], [1, 1]],
            lastTry: []
        }
        const output = {
            next: [],
            plan: [[1, 1]],
            lastTry: [0, 0]
        }
        const grid = [
            [
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}
            ],
            [
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}
            ],
            [
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}
            ],
            [
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}
            ],
            [
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}
            ],
            [
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}
            ],
            [
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}
            ],
            [
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}
            ]
        ];
        expect(computerStrategy(strategy, grid)).to.eql(output);
    });
    it('changes tack if it finds a ship', () => {
        const strategy = {
            next: [],
            plan: [[0, 0], [1, 1], [2, 2]],
            lastTry: []
        }
        const output = {
            next: [[1, 0], [0, 1]],
            plan: [[1, 1], [2, 2]],
            lastTry: [0, 0]
        }
        const grid = [
            [
                {isShip: true, isDiscovered: false}, 
                {isShip: true, isDiscovered: false}, 
                {isShip: true, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}
            ],
            [
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}
            ],
            [
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}
            ],
            [
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}
            ],
            [
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}
            ],
            [
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}
            ],
            [
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}
            ],
            [
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}, 
                {isShip: false, isDiscovered: false}
            ]
        ];
        expect(computerStrategy(strategy, grid)).to.eql(output);
    });
});