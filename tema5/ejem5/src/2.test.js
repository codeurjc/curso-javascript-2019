function getNameFromServer(callback) {
    setTimeout(()=> callback('pepe'),5000);
}

test('Callback Name is pepe', done => {

    getNameFromServer(name => {
        expect(name).toBe('pepe');
        done();
    });
    
});

test('WRONG!! Callback Name is pepe', () => {

    getNameFromServer(name => {
        expect(name).toBe('pepe');
    });
    
});