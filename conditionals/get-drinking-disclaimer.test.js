const getDrinkingDisclaimer = require('./get-drinking-disclaimer');

test('getDrinkingDisclaimer returns correct message for age 21', () => {
    expect(getDrinkingDisclaimer(21)).toBe('You can drink.');
});

test('getDrinkingDisclaimer returns correct message for age 18', () => {
    expect(getDrinkingDisclaimer(18)).toBe('You cannot drink.');
});