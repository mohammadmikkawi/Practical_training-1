function sortWords(str) {
    return str.split(/\s+/).sort((a, b) => a.localeCompare(b)).join(" ");
}
