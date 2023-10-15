const getStrategy = (grid) => {
    if (!grid) {
        return [];
    }
    let random = Math.random()
    let strategy = random < 0.6 ? "randomDiagonal" : random < 0.8 ? "forwardDiagonal" : "backwardDiagonal";
    let plan = [];
    let isEven = Math.random() < 0.5;

    for (let i = 0; i < 10; i++) {
        let sets = Math.round(Math.random() * 2) + 1;
        let backwards = Math.random() < 0.5;

        let result;
        if (strategy === "randomDiagonal") {
            let isForwards = Math.random() < 0.5;
            result = isForwards 
                ? getDiagonalsGoingRightAndDown(grid.length, sets, isEven)
                : getDiagonalsGoingRightAndUp(grid.length, sets, isEven);
            
            if (!isForwards) {
                for (let set of result) {
                    plan.push(set.reverse());
                }
            } else {
                for (let set of result) {
                    plan.push(set);
                }
            }
        }

        if (strategy === "forwardDiagonal") {
            result = backwards 
                ? getDiagonalsGoingRightAndUp(grid.length, sets, isEven)
                : getDiagonalsGoingRightAndDown(grid.length, sets, isEven);
            
            for (let set of result) {
                plan.push(set);
            }
        }

        if (strategy === "backwardDiagonal") {
            result = backwards 
                ? getDiagonalsGoingRightAndUp(grid.length, sets, isEven)
                : getDiagonalsGoingRightAndDown(grid.length, sets, isEven);
            
            for (let set of result) {
                plan.push(set.reverse());
            }
        }
    }

    plan = plan.reduce((acc, el) => {
        if (el.length) {
            acc.push(el);
        }
        return acc;
    }, []);
    
    return plan;
};


// const strategyTypes = [
//     "randomDiagonal",
//     "diagonalAndRandom",
//     "forwardDiagonal",
//     "backwardDiagonal",
//     "orderedDiagonal",
//     "backAndForthDiagonal",
//     "upAndDown",
//     "random",
//     "stepped"
// ]

const getDiagonalsGoingRightAndDown = (length, sets, even) => {        
    let result = [];
    for (let i = 0; i < sets; i++) {
        let diagonalRow = [];
        let maxEvenStarts = length % 2 === 0 ? length / 2 : (length + 1) / 2;
        let maxOddStarts = length - maxEvenStarts;
        let randomStart = even 
            ? 2 * Math.floor(Math.random() * maxEvenStarts)
            : 1 + 2 * Math.floor(Math.random() * maxOddStarts);
        let fromSide = Math.random() < 0.5;
        let i = 0, j = randomStart;
        while (i < length && j < length) {
            diagonalRow.push(fromSide ? [i, j] : [j, i])
            i++
            j++
        }
        result.push(diagonalRow);
    }
    
    return result;
}

const getDiagonalsGoingRightAndUp = (length, sets, even) => {        
    let result = [];
    for (let s = 0; s < sets; s++) {
        let diagonalRow = [];
        let maxEvenStarts = length % 2 === 0 ? length / 2 : (length + 1) / 2;
        let maxOddStarts = length - maxEvenStarts;

        let randomStart = even 
            ? 2 * Math.floor(Math.random() * maxEvenStarts)
            : 1 + 2 * Math.floor(Math.random() * maxOddStarts);
        let fromSide = Math.random() < 0.5;
        let i, j;
        if (fromSide) {
            i = 0;
            j = randomStart;
            while (i >= 0 && j >= 0) {
                diagonalRow.push(fromSide ? [i, j] : [j, i])
                i++
                j--
            }
        } else {
            i = length; 
            j = randomStart;
            while (i >= 0 && j >= 0) {
                diagonalRow.push(fromSide ? [i, j] : [j, i])
                i--
                j++
            }
        }
        result.push(diagonalRow);
    }
    
    return result;
}

export default getStrategy;