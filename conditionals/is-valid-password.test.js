const isValidPassword = require('./is-valid-password');

test('isValidPassword returns true for a long password', () => {
    expect(isValidPassword('sunflower42')).toBe(true);
});

test('isValidPassword returns true for exactly 8 characters', () => {
    expect(isValidPassword('abcd1234')).toBe(true);
});

test('isValidPassword returns false for a short password', () => {
    expect(isValidPassword('abc')).toBe(false);
});

test('isValidPassword returns false for the word password', () => {
    expect(isValidPassword('password')).toBe(false);
});
