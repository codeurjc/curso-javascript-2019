const Complex = require('./complex');

test.each([
    [new Complex(0, 0), 0],
    [new Complex(1, 1), 1.41421],
    [new Complex(2, 2), 2.82843],
    [new Complex(5, 5), 7.07107],
    [new Complex(10, 10), 14.1421],
    [new Complex(10, 1), 10.0498],
    [new Complex(20, 2), 20.09]
])('Complex(%s).abs() === %i',(complex, absolute) => {

    expect(complex.abs()).toBeCloseTo(absolute,1);
})