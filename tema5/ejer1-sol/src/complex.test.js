const Complex = require('./complex');

test('given Zero then RealPart = Zero and ImagPart = Zero', () => {

    let zero = new Complex(0, 0);

    expect(zero.getRealPart()).toBe(0);
    expect(zero.getImaginaryPart()).toBe(0);
})

test('given Zero and One when Zero AddToOne then OneIsObtained', () => {

    //Given
    let one = new Complex(1, 1);
    let zero = new Complex(0, 0);

    //When
    let result = zero.add(one);

    //Then		
    expect(result).toEqual(new Complex(1, 1));
});

test('given Zero and One when OneAddZero then OneIsObtained', () => {

    //Given
    let one = new Complex(1, 1);
    let zero = new Complex(0, 0);

    //When
    let result = one.add(zero);

    //Then		
    expect(result).toEqual(new Complex(1, 1));
})