const isBusinessHours = require('./is-business-hours');

test('isBusinessHours returns true on Tuesday at 10', () => {
    expect(isBusinessHours('Tuesday', 10)).toBe(true);
});

test('isBusinessHours returns true on Monday at 9', () => {
    expect(isBusinessHours('Monday', 9)).toBe(true);
});

test('isBusinessHours returns false on Friday at 17', () => {
    expect(isBusinessHours('Friday', 17)).toBe(false);
});

test('isBusinessHours returns false on Wednesday at 8', () => {
    expect(isBusinessHours('Wednesday', 8)).toBe(false);
});

test('isBusinessHours returns false on Saturday at 10', () => {
    expect(isBusinessHours('Saturday', 10)).toBe(false);
});

test('isBusinessHours returns false on Sunday at 12', () => {
    expect(isBusinessHours('Sunday', 12)).toBe(false);
});
