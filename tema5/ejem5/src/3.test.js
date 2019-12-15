function sleep(millis) {
    return new Promise(resolve => setTimeout(resolve, millis));
}

function getNameFromServer() {
    return sleep(1000).then(() => {
        return Promise.resolve('pepe');
    })
}

test('Async Name is pepe (done)', done => {

    getNameFromServer().then(name => {
        expect(name).toBe('pepe');
        done();
    });

});

test('Async Name is pepe (returning promise)', () => {

    return getNameFromServer().then(name => {
        expect(name).toBe('pepe');
    });

});

test('Async Name is pepe (resolves)', () => {

    return expect(getNameFromServer()).resolves.toBe('pepe');

});