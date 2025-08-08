function checkValue(val) {
  if (val === null) {
    return "Value is null";
  } else if (val === undefined) {
    return "Value is undefined";
  } else {
    return "Value is something else";
  }
}

console.log(checkValue(null));
console.log(checkValue(undefined));
console.log(checkValue(100));
