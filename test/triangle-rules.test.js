const { isValid, area, perimeter } = require('../src/triangle-rules');

test('equilateral triangle should be valid', () => {
    expect(isValid(3, 3, 3)).toBe(true);
});

test('isosceles triangle should be valid', () => {
    expect(isValid(2, 3, 3)).toBe(true);
});

test('scalene triangle should be valid', () => {
    expect(isValid(2, 3, 4)).toBe(true);
});

test('zero side should be invalid', () => {
    expect(isValid(0, 0, 0)).toBe(false);
});

test('negative side should be invalid', () => {
    expect(isValid(-2, -3, -4)).toBe(false);
});

test('base 1 and height 1 area equals to 0.5 area', () => {
    expect(area(1, 1)).toBe(0.5);
});

test('base 3 and height 4 area equals to 6 area', () => {
    expect(area(3, 4)).toBe(6);
});

test('a 1, b 2 and c 3 should return 6', () => {
    expect(perimeter(1, 2, 3)).toBe(6);
});