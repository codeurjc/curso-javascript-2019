function sleep(millis){
    return new Promise(resolve => setTimeout(resolve,millis));
}

async function getNameFromServer() {
    await sleep(1000);
    return 'pepe';
}

test('Async Name is pepe', async () => {

    expect(await getNameFromServer()).toBe('pepe');
});