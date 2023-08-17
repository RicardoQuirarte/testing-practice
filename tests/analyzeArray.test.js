const analyzeArray = require('../functions/analyzeArray');

test('takes an array of numbers and returns average, min, max and length', () => {
    expect(analyzeArray([1,3,5,7,9,11,13])).toEqual({
        average:7,
        min: 1,
        max: 13,
        length: 7});
  });

test('takes an array of numbers and returns average, min, max and length', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average:4,
        min: 1,
        max: 8,
        length: 6});
  });