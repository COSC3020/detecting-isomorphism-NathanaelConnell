function are_isomorphic(graph1, graph2) {
    if (graph1.length !== graph2.length) {
        return false;
    }

    function isValidMapping(mapping) {
        for (let i = 0; i < graph1.length; i++) {
            const mappedNeighbors = graph1[i].map(node => mapping[node]).sort();
            const targetNeighbors = graph2[mapping[i]].slice().sort();
            if (JSON.stringify(mappedNeighbors) !== JSON.stringify(targetNeighbors)) {
                return false;
            }
        }
        return true;
    }

    function generatePermutations(arr) {
        if (arr.length <= 1) {
            return [arr];
        }
        const perms = [];
        for (let i = 0; i < arr.length; i++) {
            const current = arr[i];
            const subPerms = generatePermutations(arr.slice(0, i).concat(arr.slice(i + 1)));
            for (const perm of subPerms) {
                perms.push([current].concat(perm));
            }
        }
        return perms;
    }

    const nodeIndices = Array.from({ length: graph1.length }, (_, i) => i);
    const permutations = generatePermutations(nodeIndices);

    for (const mapping of permutations) {
        if (isValidMapping(mapping)) {
            return true;
        }
    }

    return false;
}
