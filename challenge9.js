function doubleNumbers(arr) {
  let newArr = [];
  for (let num of arr) {
    newArr.push(num * 2);
  }
  return newArr;
}

console.log(doubleNumbers([1, 2, 3, 4]));
