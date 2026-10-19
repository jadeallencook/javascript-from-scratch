const getShippingCost = require('./get-shipping-cost');

test('getShippingCost returns 0 for an order of 75', () => {
    expect(getShippingCost(75)).toBe(0);
});

test('getShippingCost returns 0 for an order of exactly 50', () => {
    expect(getShippingCost(50)).toBe(0);
});

test('getShippingCost returns 5.99 for an order of 49.99', () => {
    expect(getShippingCost(49.99)).toBe(5.99);
});

test('getShippingCost returns 5.99 for an order of 20', () => {
    expect(getShippingCost(20)).toBe(5.99);
});
