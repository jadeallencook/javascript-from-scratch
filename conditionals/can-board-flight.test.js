const canBoardFlight = require('./can-board-flight');

test('canBoardFlight returns true with a ticket, ID, and on time', () => {
    expect(canBoardFlight(true, true, false)).toBe(true);
});

test('canBoardFlight returns false when late', () => {
    expect(canBoardFlight(true, true, true)).toBe(false);
});

test('canBoardFlight returns false without an ID', () => {
    expect(canBoardFlight(true, false, false)).toBe(false);
});

test('canBoardFlight returns false without a ticket', () => {
    expect(canBoardFlight(false, true, false)).toBe(false);
});
