const getItemCountLabel = require('./get-item-count-label');

test('getItemCountLabel returns 1 item for 1', () => {
    expect(getItemCountLabel(1)).toBe('1 item');
});

test('getItemCountLabel returns 3 items for 3', () => {
    expect(getItemCountLabel(3)).toBe('3 items');
});

test('getItemCountLabel returns 0 items for 0', () => {
    expect(getItemCountLabel(0)).toBe('0 items');
});
