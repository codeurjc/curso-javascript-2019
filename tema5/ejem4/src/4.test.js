function getArray() {
    return ['Alice', 'Bob', 'Luca'];
}

function getOtherArray() {
    return ['Alice', 'Bob', 'Luca'];
}

test('Has at least expected elements', () => {
    expect(getArray())
        .toEqual(expect.arrayContaining(['Alice', 'Bob']));
});

test('Does not have all elements', () => {
    expect(getOtherArray())
        .not.toEqual(expect.arrayContaining(['Alice', 'Bob']));
});

test('Does not have all elements', () => {
    expect(getOtherArray())
        .toEqual(expect.not.arrayContaining(['Alice', 'Bob']));
});
