const getUsernameError = require('./get-username-error');

test('getUsernameError returns required error for an empty username', () => {
    expect(getUsernameError('')).toBe('Username is required.');
});

test('getUsernameError returns too short error for 2 characters', () => {
    expect(getUsernameError('jo')).toBe('Username is too short.');
});

test('getUsernameError returns no error for exactly 3 characters', () => {
    expect(getUsernameError('sam')).toBe('');
});

test('getUsernameError returns no error for a valid username', () => {
    expect(getUsernameError('jade')).toBe('');
});
