import { expect } from 'chai';
import createGame from '../createGame.js';
import generateGrid from '../generateGrid.js';

describe('createGame', () => {
    it('is a function', () => {
        expect(createGame).to.be.a('function');
    });
    it('returns an object', () => {
        expect(typeof createGame()).to.equal('object');
    });
    it('returns a 10x10 grid when given no inputs', () => {
        expect(createGame().playerA.length).to.equal(10);
    });
    it('returns a 10x10 grid if the grid is too small', () => {
        expect(createGame([[[], [], [], [], [], [], [], [], [], []], [[], [], [], [], [], [], [], [], [], []]]).playerA.length).to.equal(10);
        expect(createGame([[], [], [], [], [], [], [], [], [], []]).playerA.length).to.equal(10);
    });
    it('returns a grid with 5 ships when given no inputs', () => {
        expect(createGame().boats.length).to.equal(5);
    });
    it('returns the right number of ships', () => {
        const threeBoats = [
            {
                name: "Carrier",
                length: 5
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
        const fakeGameA = generateGrid()
        const fakeGameB = generateGrid()
        expect(createGame(fakeGameA, fakeGameB, threeBoats).boats.length).to.equal(3);
    });
    it('creates a grid which matches the ships', () => {
        const boats = [
            {
                name: "Carrier",
                length: 5
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
        const fakeGameA = generateGrid()
        const fakeGameB = generateGrid()
        const game = createGame(fakeGameA, fakeGameB, boats);
        const countOfBoats = boats.reduce((acc, boat) => {
            return acc + boat.length;
        }, 0)
        const countInGrid = game.playerA.reduce((acc, row) => {
            return acc + row.reduce((acc2, cell) => {
                return cell.isShip ? acc2 + 1 : acc2;
            }, 0);
        }, 0);
        expect(countOfBoats === countInGrid).to.equal(true);
    });
});