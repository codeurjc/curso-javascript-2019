const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(4);
});

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2) === 4).toBeTruthy();
});

it('force fail', () => {
    if (true) {
        throw new Error("didn't throw");
    }
});