const reverseString = require('../functions/reverseString');

test('takes a string and returns it reversed', () => {
    expect(reverseString('ricardo')).toBe('odracir');
  });