const getBatteryStatus = require('./get-battery-status');

test('getBatteryStatus returns Charging when plugged in with low battery', () => {
    expect(getBatteryStatus(10, true)).toBe('Charging');
});

test('getBatteryStatus returns Charging when plugged in with full battery', () => {
    expect(getBatteryStatus(100, true)).toBe('Charging');
});

test('getBatteryStatus returns Low battery at 19 percent', () => {
    expect(getBatteryStatus(19, false)).toBe('Low battery');
});

test('getBatteryStatus returns OK at 20 percent', () => {
    expect(getBatteryStatus(20, false)).toBe('OK');
});

test('getBatteryStatus returns OK at 80 percent', () => {
    expect(getBatteryStatus(80, false)).toBe('OK');
});
