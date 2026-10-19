const getTicketPrice = require('./get-ticket-price');

test('getTicketPrice returns 8 for a 10 year old', () => {
    expect(getTicketPrice(10)).toBe(8);
});

test('getTicketPrice returns 12 for a 13 year old', () => {
    expect(getTicketPrice(13)).toBe(12);
});

test('getTicketPrice returns 12 for a 30 year old', () => {
    expect(getTicketPrice(30)).toBe(12);
});

test('getTicketPrice returns 9 for a 65 year old', () => {
    expect(getTicketPrice(65)).toBe(9);
});
