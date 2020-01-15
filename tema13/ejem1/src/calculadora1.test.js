const Calculadora = require('./calculadora');

test('testSuma', () => {

    // Arrange / Given
    const calculadora = new Calculadora();

    // Act / When
    let resultado = calculadora.suma(1, 1);

    // Assert / Then
    expect(resultado).toBe(2);

});
