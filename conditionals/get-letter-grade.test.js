const getLetterGrade = require('./get-letter-grade');

test('getLetterGrade returns A for 95', () => {
    expect(getLetterGrade(95)).toBe('A');
});

test('getLetterGrade returns A for exactly 90', () => {
    expect(getLetterGrade(90)).toBe('A');
});

test('getLetterGrade returns B for 85', () => {
    expect(getLetterGrade(85)).toBe('B');
});

test('getLetterGrade returns C for 72', () => {
    expect(getLetterGrade(72)).toBe('C');
});

test('getLetterGrade returns D for 60', () => {
    expect(getLetterGrade(60)).toBe('D');
});

test('getLetterGrade returns F for 59', () => {
    expect(getLetterGrade(59)).toBe('F');
});
