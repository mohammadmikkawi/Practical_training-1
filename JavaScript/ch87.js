function setOperations(a, b) {
    const setA = new Set(a);
    const setB = new Set(b);
    const union = [...new Set([...a, ...b])];
    const intersection = [...setA].filter(x => setB.has(x));
    const difference = [...setA].filter(x => !setB.has(x));
    return { union, intersection, difference };
}
