function compareNumbers(a, b) {
  return (a == b) && (a === b);
}

console.log(compareNumbers(5, "5"));
console.log(compareNumbers(5, 5));
