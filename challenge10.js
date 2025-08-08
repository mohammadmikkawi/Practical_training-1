function countOccurrences(arr, val) {
  let count = 0;
  for (let item of arr) {
    if (item === val) {
      count++;
    }
  }
  return count;
}

console.log(countOccurrences([1,2,2,3,2,4], 2));
