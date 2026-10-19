const canRentCar = require('./can-rent-car');

test('canRentCar returns true for a 30 year old with a license', () => {
    expect(canRentCar(30, true)).toBe(true);
});

test('canRentCar returns true for a 25 year old with a license', () => {
    expect(canRentCar(25, true)).toBe(true);
});

test('canRentCar returns false for a 22 year old with a license', () => {
    expect(canRentCar(22, true)).toBe(false);
});

test('canRentCar returns false for a 30 year old without a license', () => {
    expect(canRentCar(30, false)).toBe(false);
});
