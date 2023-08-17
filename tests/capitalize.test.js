const capitalize = require('../functions/capitalize');

test('takes a string and returns it with first character capitalized', () => {
    expect(capitalize('ricardo')).toBe('Ricardo');
  });