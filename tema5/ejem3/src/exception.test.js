function doSomething() {
    throw new Error("error");
}

test('Exception Error should be thrown', () => {

    expect(() => {

        doSomething();

    }).toThrow();

});

test('Exception Error with "error_message" should be thrown', () => {

    expect(() => {

        doSomething();

    }).toThrowError('error_message');

});
