const getStrategy = (grid) => {
    if (!grid) {
        return [];
    }
    let random = Math.random()
    // Determine the strategy
    let strategy = random < 0.6 ? "randomDiagonal" : random < 0.8 ? "forwardDiagonal" : "backwardDiagonal";
    let plan = [];
    let isEven = Math.random() < 0.5;

    // Generate 10 strategy sets
    for (let i = 0; i < 10; i++) {
        // Determine the number of diagonal sets based on a random number (from 1 to 4).
        let sets = Math.round(Math.random() * 2) + 1;
        // Determine whether to use 'A' sets or 'B' sets based on a random number. A sets start from the top, B sets start from the bottom
        let backwards = Math.random() < 0.5;

        if (strategy === "randomDiagonal") {
            let isForwards = Math.random() < 0.5;
            if (isForwards) {
                if (!backwards) {
                    let result = getDiagonalsGoingRightAndDown(grid.length, sets, isEven)
                    result.forEach(set => plan.push(set));
                } else {
                    let result = getDiagonalsGoingRightAndUp(grid.length, sets, isEven)
                    result.forEach(set => plan.push(set));
                }
            } else {
                if (!backwards) {
                    let result = getDiagonalsGoingRightAndDown(grid.length, sets, isEven)
                    result.forEach(set => plan.push(set.reverse()));
                } else {
                    let result = getDiagonalsGoingRightAndUp(grid.length, sets, isEven)
                    result.forEach(set => plan.push(set.reverse()));
                }
            }
        }

        if (strategy === "forwardDiagonal") {
            if (!backwards) {
                let result = getDiagonalsGoingRightAndDown(grid.length, sets, isEven)
                result.forEach(set => plan.push(set));
            } else {
                let result = getDiagonalsGoingRightAndUp(grid.length, sets, isEven)
                result.forEach(set => plan.push(set));
            }
        }

        if (strategy === "backwardDiagonal") {
            if (!backwards) {
                console.log("left and up");
                
                let result = getDiagonalsGoingRightAndDown(grid.length, sets, isEven)
                result.forEach(set => plan.push(set.reverse()));
            } else {
                console.log("left and down");

                let result = getDiagonalsGoingRightAndUp(grid.length, sets, isEven)
                result.forEach(set => plan.push(set.reverse()));
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
}


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