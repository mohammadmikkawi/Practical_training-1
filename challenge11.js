function sumEven(arr) {
  let sum = 0;
  for (let n of arr) {
    if (n % 2 === 0) {
      sum += n;
    }
  }
  return sum;
}

console.log(sumEven([1, 2, 3, 4, 5, 6]));
