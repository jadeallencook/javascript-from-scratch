const shouldSendNotification = require('./should-send-notification');

test('shouldSendNotification returns true when enabled and not in Do Not Disturb', () => {
    expect(shouldSendNotification(true, false)).toBe(true);
});

test('shouldSendNotification returns false when in Do Not Disturb', () => {
    expect(shouldSendNotification(true, true)).toBe(false);
});

test('shouldSendNotification returns false when notifications are disabled', () => {
    expect(shouldSendNotification(false, false)).toBe(false);
});
