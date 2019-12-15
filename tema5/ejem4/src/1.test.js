function getName() {
    return 'pepe';
}

test('Expect name is Juan', () => {

    expect(getName() === 'juan').toBeTruthy();
});

test('Expect name is Juan with matcher', () => {

    expect(getName()).toBe('juan');
});

