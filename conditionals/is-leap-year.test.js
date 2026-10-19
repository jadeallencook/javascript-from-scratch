const isLeapYear = require('./is-leap-year');

test('isLeapYear returns true for 2024', () => {
    expect(isLeapYear(2024)).toBe(true);
});

test('isLeapYear returns false for 2023', () => {
    expect(isLeapYear(2023)).toBe(false);
});

test('isLeapYear returns false for 1900', () => {
    expect(isLeapYear(1900)).toBe(false);
});

test('isLeapYear returns true for 2000', () => {
    expect(isLeapYear(2000)).toBe(true);
});
