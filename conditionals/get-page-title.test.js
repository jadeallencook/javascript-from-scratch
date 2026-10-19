const getPageTitle = require('./get-page-title');

test('getPageTitle returns the page and site name for About', () => {
    expect(getPageTitle('About')).toBe('About | My Site');
});

test('getPageTitle returns the page and site name for Contact', () => {
    expect(getPageTitle('Contact')).toBe('Contact | My Site');
});

test('getPageTitle returns just the site name for an empty title', () => {
    expect(getPageTitle('')).toBe('My Site');
});
