const getTipAmount = require('./get-tip-amount');

test('getTipAmount returns 20 for great service on a 100 bill', () => {
    expect(getTipAmount(100, 'great')).toBe(20);
});

test('getTipAmount returns 15 for good service on a 100 bill', () => {
    expect(getTipAmount(100, 'good')).toBe(15);
});

test('getTipAmount returns 10 for poor service on a 100 bill', () => {
    expect(getTipAmount(100, 'poor')).toBe(10);
});

test('getTipAmount returns 8 for great service on a 40 bill', () => {
    expect(getTipAmount(40, 'great')).toBe(8);
});
