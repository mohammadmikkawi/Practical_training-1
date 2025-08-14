function sortByProperty(arr, prop) {
    return arr.sort((a, b) => a[prop] > b[prop] ? 1 : -1);
}
