function someObject() {
    return { x: 3, y: 0, z: 1 };
}

test('Object contains at least props with values', () => {

    expect(someObject()).toEqual(
        expect.objectContaining({ x: 3, y: 0 })
    );

});

