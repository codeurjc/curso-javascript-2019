const cases = [
    [1, 1, 2],
    [1, 2, 4],
    [2, 1, 3],
]

test.each(cases)('add (%i, %i) = %i', (a, b, expected) => {
    expect(a + b).toBe(expected);
});