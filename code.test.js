const fs = require('fs');
let assert = require('assert');

eval(fs.readFileSync('code.js') + '');

let testCases = [
    {
        graph1: [ [1 , 2], [0 , 3], [0 , 3], [1 , 2 , 4], [3], ],
        graph2: [ [4], [4 , 2], [1 , 3], [2 , 4], [0 , 1 , 3], ],
        expectResult: true,
    },
    {
        graph1: [ [1 , 2], [0 , 3], [0 , 3], [1 , 2 , 4], [3], ],
        graph2: [ [1], [0, 2], [1, 3, 4], [2], [2, 5, 6], [4], [4], ],
        expectResult: false,
    },
    {
        graph1: [ [1], [0, 2], [1, 3, 4], [2], [2, 5, 6], [4], [4], ],
        graph2: [ [3], [3], [4, 6], [0, 1, 4], [2, 3, 5], [4], [2], ],
        expectResult: true,
    },
    {
        graph1: [ [1 , 2], [0 , 3], [0 , 3], [1 , 2 , 4], [3], ],
        graph2: [ [1 , 2], [0 , 3], [0 , 3], [1 , 2 , 4], [3, 0], ],
        expectResult: false,
    },
];

function runTests(testCase) {
    let allPassed = true;
    for (const thisCase of testCase) {
        let { graph1, graph2, expectResult } = thisCase;
        let actualResult = are_isomorphic(graph1, graph2);
        if (actualResult !== expectResult) {
            console.error(`Test Case Failed:`);
            console.error(`  - Graph 1: ${JSON.stringify(graph1)}`);
            console.error(`  - Graph 2: ${JSON.stringify(graph2)}`);
            console.error(`  - Expected Result: ${expectResult}`);
            console.error(`  - Actual Result: ${actualResult}`);
            allPassed = false;
        }
    }
    return allPassed;
}

assert(runTests(testCases));
