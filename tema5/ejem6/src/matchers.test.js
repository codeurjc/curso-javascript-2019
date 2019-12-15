test('map calls its argument with a non-null argument', () => {
    const mock = jest.fn();
    [1].map(x => mock(x));
    expect(mock).toBeCalledWith(expect.anything());
});

test('onPress gets called with the right thing', () => {
    const onPress = jest.fn();
    simulatePresses(onPress);
    expect(onPress).toBeCalledWith(
        expect.objectContaining({
            x: expect.any(Number),
            y: expect.any(Number),
        }),
    );
});