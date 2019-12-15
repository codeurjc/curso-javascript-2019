module.exports = class Complex {

    constructor(realPart, imaginaryPart) {
        this.realPart = realPart;
        this.imaginaryPart = imaginaryPart;
    }

    getRealPart() {
        return this.realPart;
    }

    getImaginaryPart() {
        return this.imaginaryPart;
    }

    abs() {
        return Math.sqrt(Math.pow(this.realPart, 2.0) + Math.pow(this.imaginaryPart, 2.0));
    }

    phase() {
        return Math.atan2(this.imaginaryPart, this.realPart);
    }

    // return a new Complex object whose value is the conjugate of this
    conjugate() {
        return new Complex(this.realPart, -this.imaginaryPart);
    }

    // return a new Complex object whose value is the reciprocal of this
    reciprocal() {
        let scale = Math.pow(this.realPart, 2.0) + Math.pow(this.imaginaryPart, 2.0);
        return new Complex(this.realPart / scale, this.imaginaryPart / scale);
    }

    // return a new Complex object whose value is (this + complex)
    add(complex) {

        let newRealPart = this.realPart + complex.realPart;
        let newImaginaryPart = this.imaginaryPart + complex.imaginaryPart;

        return new Complex(newRealPart, newImaginaryPart);
    }

    // return a new Complex object whose value is (this - complex)
    minus(complex) {
        let newRealPart = this.realPart - complex.realPart;
        let newImaginaryPart = this.imaginaryPart - complex.imaginaryPart;

        return new Complex(newRealPart, newImaginaryPart);
    }

    // return a new Complex object whose value is (this * complex)
    times(complex) {
        let newRealPart = (this.realPart * complex.realPart)
            - (this.imaginaryPart * complex.imaginaryPart);
        let newImaginaryPart = (this.realPart * complex.imaginaryPart)
            - (this.imaginaryPart * complex.realPart);

        return new Complex(newRealPart, newImaginaryPart);
    }

    // return a new Complex object whose value is (this * alpha)
    times(alpha) {
        return new Complex(alpha * this.realPart, alpha * this.imaginaryPart);
    }

    // return a new Complex object whose value is (this / complex)
    divides(complex) {
        return this.times(complex.reciprocal());
    }
}