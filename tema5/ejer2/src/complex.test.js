const Complex = require('./complex');

let zero;

beforeEach(()=>{
    zero = new Complex(0, 0);
})

test('given Zero then RealPart = Zero and ImagPart = Zero', () => {

    expect(zero.getRealPart()).toBe(0);
    expect(zero.getImaginaryPart()).toBe(0);
})

test('given Zero and One when Zero AddToOne then OneIsObtained', () => {

    //Given
    let one = new Complex(1, 1);

    //When
    let result = zero.add(one);

    //Then		
    expect(result).toEqual(new Complex(1, 1));
});

test('given Zero and One when OneAddZero then OneIsObtained', () => {

    //Given
    let one = new Complex(1, 1);

    //When
    let result = one.add(zero);

    //Then		
    expect(result).toEqual(new Complex(1, 1));
})