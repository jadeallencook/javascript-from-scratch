const getGreeting = require('./get-greeting');

test('getGreeting returns Good morning at 9', () => {
    expect(getGreeting(9)).toBe('Good morning');
});

test('getGreeting returns Good morning at 0', () => {
    expect(getGreeting(0)).toBe('Good morning');
});

test('getGreeting returns Good afternoon at 12', () => {
    expect(getGreeting(12)).toBe('Good afternoon');
});

test('getGreeting returns Good afternoon at 17', () => {
    expect(getGreeting(17)).toBe('Good afternoon');
});

test('getGreeting returns Good evening at 18', () => {
    expect(getGreeting(18)).toBe('Good evening');
});
