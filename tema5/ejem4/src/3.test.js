function someString(){ return 'string' };

function someNumber(){ return 3 };

function someFunction(){ return function(){} };

function someArray(){ return [] };

function someObject(){ return {} };

test('Is a string', () => {
    expect(someString()).toEqual(expect.any(String));
});

test('Is a number', () => {
    expect(someNumber()).toEqual(expect.any(Number));
});

test('Is a Function', () => {
    expect(someFunction()).toEqual(expect.any(Function));
});

test('Is an Array', () => {
    expect(someArray()).toEqual(expect.any(Array));
});

test('Is an Object', () => {
    expect(someObject()).toEqual(expect.any(Object));
});