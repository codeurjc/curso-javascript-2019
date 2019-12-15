function someObject() {
    return { x: 3, y: 0, values: [3] };
}

test('Object contains at least props of types', () => {

    expect(someObject()).toEqual(
        expect.objectContaining({
            x: expect.any(Number),
            y: expect.any(Number),
            values: expect.arrayContaining([expect.any(Number)])
        })
    );

});

