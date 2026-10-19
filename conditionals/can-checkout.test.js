const canCheckout = require('./can-checkout');

test('canCheckout returns true with items in cart and logged in', () => {
    expect(canCheckout(3, true)).toBe(true);
});

test('canCheckout returns false with an empty cart', () => {
    expect(canCheckout(0, true)).toBe(false);
});

test('canCheckout returns false when not logged in', () => {
    expect(canCheckout(3, false)).toBe(false);
});

test('canCheckout returns false with an empty cart and not logged in', () => {
    expect(canCheckout(0, false)).toBe(false);
});
