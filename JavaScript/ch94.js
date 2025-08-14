function range(start, end) {
    let result = [];
    let isNumber = !isNaN(start);
    if (isNumber) {
        for (let i = start; i <= end; i++) result.push(i);
    } else {
        for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i++) {
            result.push(String.fromCharCode(i));
        }
    }
    return result;
}
