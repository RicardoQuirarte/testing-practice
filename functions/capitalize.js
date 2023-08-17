function capitalize(string) {
    const firstLeter = string.charAt(0);
    const toUpper = firstLeter.toUpperCase();
    const remainingLetter = string.slice(1);
    const finalWord = toUpper + remainingLetter;
    return finalWord;
}

module.exports = capitalize;