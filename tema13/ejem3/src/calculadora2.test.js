const Calculadora = require('./calculadora');

// Arrange / Given
let calculadora;

beforeEach(() => {
    calculadora = new Calculadora();
});

test('testSuma', () => {

    // Act / When
    let resultado = calculadora.suma(1, 1);

    // Assert / Then
    expect(resultado).toBe(2);

});

test('testResta', () => {

    // Act / When
    let resultado = calculadora.suma(1, 1);

    // Assert / Then
    expect(resultado).toBe(2);

});
