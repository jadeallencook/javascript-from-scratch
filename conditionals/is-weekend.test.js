const isWeekend = require('./is-weekend');

test('isWeekend returns true for Saturday', () => {
    expect(isWeekend('Saturday')).toBe(true);
});

test('isWeekend returns true for Sunday', () => {
    expect(isWeekend('Sunday')).toBe(true);
});

test('isWeekend returns false for Monday', () => {
    expect(isWeekend('Monday')).toBe(false);
});

test('isWeekend returns false for Friday', () => {
    expect(isWeekend('Friday')).toBe(false);
});
