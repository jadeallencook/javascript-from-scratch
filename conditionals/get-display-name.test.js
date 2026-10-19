const getDisplayName = require('./get-display-name');

test('getDisplayName returns the nickname when one is set', () => {
    expect(getDisplayName('JJ', 'Jordan')).toBe('JJ');
});

test('getDisplayName returns the first name when nickname is empty', () => {
    expect(getDisplayName('', 'Jordan')).toBe('Jordan');
});

test('getDisplayName returns the first name when nickname is undefined', () => {
    expect(getDisplayName(undefined, 'Sam')).toBe('Sam');
});
