function analyzeArray(arr) {
    const length = arr.length;
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const average = arr.reduce((a, b) => a + b) / arr.length;

    return { average, min, max, length };
}

module.exports = analyzeArray;