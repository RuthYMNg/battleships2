import { expect } from 'chai';
import generateGrid from '../generateGrid.js';
import {
    isCellValid,
    getAdjacentCells,
    allAdjacentCellsDiscoveredAndNotShip,
    allAdjacentCellsDiscovered,
    createFinalStrategy,
    isAdjacentToDiscoveredShip,
    isPartOfUndiscoveredRowOrColumn,
    countUndiscoveredShips,
    prioritiseStrategyPlan,
    processCell,
    computerStrategy
} from '../computerStrategy.js';

describe('computerStrategy', () => {
    it('is a function', () => {
        expect(computerStrategy).to.be.a('function');
    });
    it('returns an object', () => {
        let strategy = {
            next: [],
            plan: [],
            lastTry: [],
            firstHit: null,
            direction: null,
            boatHits: []
        };
        let grid = generateGrid();
        let result = computerStrategy(strategy, grid);
        expect(typeof result).to.equal('object');
    });
    it('has three key value pairs', () => {
        let strategy = {
            next: [],
            plan: [],
            lastTry: [],
            firstHit: null,
            direction: null,
            boatHits: []
        };
        let grid = generateGrid();
        let result = computerStrategy(strategy, grid);
        expect(result).to.haveOwnProperty('next');
        expect(result).to.haveOwnProperty('plan');
        expect(result).to.haveOwnProperty('lastTry');
    });
    it('has values which are all arrays', () => {
        let strategy = {
            next: [],
            plan: [],
            lastTry: [],
            firstHit: null,
            direction: null,
            boatHits: []
        };
        let grid = generateGrid();
        let result = computerStrategy(strategy, grid);
        expect(Array.isArray(result.next)).to.equal(true);
        expect(Array.isArray(result.plan)).to.equal(true);
        expect(Array.isArray(result.lastTry)).to.equal(true);
    });
    it('returns default if there is no grid', () => {
        const input = {
            next: [],
            plan: [],
            lastTry: [],
            firstHit: null,
            direction: null,
            boatHits: []
        }
        expect(computerStrategy(input)).to.equal(input);
        expect(computerStrategy(input)).to.equal(input);
        expect(computerStrategy(input)).to.equal(input);
    });
    it('returns a plan if there is none', () => {
        const strategy = {
            next: [],
            plan: [],
            lastTry: [],
            firstHit: null,
            direction: null,
            boatHits: []
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
            lastTry: [],
            firstHit: null,
            direction: null,
            boatHits: []
        }
        const output = {
            next: [],
            plan: [[1, 1]],
            lastTry: [0, 0],
            firstHit: null,
            direction: null,
            boatHits: []
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
            lastTry: [],
            firstHit: null,
            direction: null,
            boatHits: []
        }
        const output = {
            next: [[1, 0], [0, 1]],
            plan: [[1, 1], [2, 2]],
            lastTry: [0, 0],
            firstHit: [0,0],
            direction: null,
            boatHits: [[0,0]]
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


describe('Strategy functions', () => {

    const sampleGrid = [
        [{isDiscovered: false, isShip: false}, {isDiscovered: true, isShip: true}],
        [{isDiscovered: true, isShip: false}, {isDiscovered: false, isShip: true}],
    ];

    const sampleGrid2 = [
        [{isDiscovered: false, isShip: false}, {isDiscovered: true, isShip: false}, {isDiscovered: false, isShip: true}, {isDiscovered: true, isShip: true}],
        [{isDiscovered: true, isShip: false}, {isDiscovered: true, isShip: false}, {isDiscovered: false, isShip: false}, {isDiscovered: false, isShip: false}],
        [{isDiscovered: true, isShip: false}, {isDiscovered: false, isShip: false}, {isDiscovered: false, isShip: false}, {isDiscovered: false, isShip: false}],
        [{isDiscovered: true, isShip: false}, {isDiscovered: false, isShip: false}, {isDiscovered: false, isShip: false}, {isDiscovered: false, isShip: false}]
    ]

    it('isCellValid should validate cell correctly', () => {
        expect(isCellValid([0,0], sampleGrid)).to.be.true;
        expect(isCellValid([2,2], sampleGrid)).to.be.false;
        expect(isCellValid([0,0], sampleGrid2)).to.be.true;
        expect(isCellValid([4,4], sampleGrid2)).to.be.false;
    });

    it('getAdjacentCellsshould return adjacent cells correctly', () => {
        expect(getAdjacentCells([0,0])).to.deep.equal([[-1, 0], [1, 0], [0, -1], [0, 1]]);
    });

    it('allAdjacentCellsDiscoveredAndNotShip should check if all adjacent cells are discovered and not a ship correctly', () => {
        expect(allAdjacentCellsDiscoveredAndNotShip([0,0], sampleGrid)).to.be.false;
        expect(allAdjacentCellsDiscoveredAndNotShip([0,0], sampleGrid2)).to.be.true;
    });

    it('allAdjacentCellsDiscovered should check if all adjacent cells are discovered correctly', () => {
        expect(allAdjacentCellsDiscovered([1,0], sampleGrid)).to.be.false;
        expect(allAdjacentCellsDiscovered([0,0], sampleGrid2)).to.be.true;
    });

    it('createFinalStrategy should create a final strategy correctly', () => {
        expect(Array.isArray(createFinalStrategy(sampleGrid))).to.equal(true);
    });

    it('isAdjacentToDiscoveredShip should check if cell is adjacent to a discovered ship correctly', () => {
        expect(isAdjacentToDiscoveredShip([0, 1], sampleGrid)).to.be.false;
        expect(isAdjacentToDiscoveredShip([2, 0], sampleGrid2)).to.be.true;
        expect(isAdjacentToDiscoveredShip([3,1], sampleGrid2)).to.be.true;
    });

    it('isPartOfUndiscoveredRowOrColumn should check if cell is part of an undiscovered row or column correctly', () => {
        expect(isPartOfUndiscoveredRowOrColumn([0, 0], sampleGrid)).to.be.false;
        expect(isPartOfUndiscoveredRowOrColumn([2, 2], sampleGrid2)).to.be.true;
    });

    it('countUndiscoveredShips should count undiscovered ships correctly', () => {
        expect(countUndiscoveredShips(sampleGrid)).to.equal(1);
        expect(countUndiscoveredShips(sampleGrid2)).to.equal(1);
    });

    it(' should prioritise strategy plan correctly', () => {
        const strategy = {
            plan: [[1, 1], [0, 0]]
        };
        prioritiseStrategyPlan(strategy, sampleGrid);
        expect(strategy.plan).to.deep.equal([[1, 1], [0, 0]]);
        const strategy2 = {
            plan: []
        };
        prioritiseStrategyPlan(strategy2, sampleGrid2);
        expect(strategy2.plan).to.deep.equal([]);
    });

    it('processCell should process cell correctly', () => {
        const strategy = {
            next: [[0, 0]],
            plan: [],
            lastTry: [],
            firstHit: null,
            direction: null,
            boatHits: []
        };
        const result = processCell([0, 0], sampleGrid, strategy);
        expect(result.value).to.be.true;
        const strategy2 = {
            next: [[0, 0]],
            plan: [],
            lastTry: [],
            firstHit: null,
            direction: null,
            boatHits: []
        };
        const result2 = processCell([0, 0], sampleGrid2, strategy2);
        expect(result2.value).to.be.false;
    });
});

