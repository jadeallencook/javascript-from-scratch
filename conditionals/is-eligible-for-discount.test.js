const isEligibleForDiscount = require('./is-eligible-for-discount');

test('isEligibleForDiscount returns true for a student', () => {
    expect(isEligibleForDiscount(true, false)).toBe(true);
});

test('isEligibleForDiscount returns true for a senior', () => {
    expect(isEligibleForDiscount(false, true)).toBe(true);
});

test('isEligibleForDiscount returns true for a student who is also a senior', () => {
    expect(isEligibleForDiscount(true, true)).toBe(true);
});

test('isEligibleForDiscount returns false for a customer who is neither', () => {
    expect(isEligibleForDiscount(false, false)).toBe(false);
});
