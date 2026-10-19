const canVote = require('./can-vote');

test('canVote returns true for an 18 year old registered citizen', () => {
    expect(canVote(18, true, true)).toBe(true);
});

test('canVote returns false for a 17 year old', () => {
    expect(canVote(17, true, true)).toBe(false);
});

test('canVote returns false for a non-citizen', () => {
    expect(canVote(30, false, true)).toBe(false);
});

test('canVote returns false for someone not registered', () => {
    expect(canVote(30, true, false)).toBe(false);
});
