function sum(...args) {
    if (args.length === 1) return args[0];
    return args.reduce((a, b) => a + b, 0);
}
