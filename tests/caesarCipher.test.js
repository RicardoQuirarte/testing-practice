const caesarCipher = require('../functions/caesarCipher');

test('takes a string and a shift factor and returns it with each character shifted', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1)).toBe('bcdefghijklmnopqrstuvwxyza');
  });

test('takes a string and a shift factor and returns it with each character shifted', () => {
    expect(caesarCipher('ricardo', 2)).toBe('tkectfq');
  });

test('takes a string and a shift factor and returns it with each character shifted', () => {
    expect(caesarCipher('xalapa', 3)).toBe('adodsd');
  });

test('takes a string and a shift factor and returns it with each character shifted', () => {
    expect(caesarCipher('daryan!!', 4)).toBe('hevcer!!');
  });

test('takes a string and a shift factor and returns it with each character shifted', () => {
    expect(caesarCipher('a', 5)).toBe('f');
  });