{
   function f(x: number): string {
       return x.toString();
   }

    let x: number | null | undefined;
    
    if (x) {
        f(x);  // Ok, type of x is number here
    } else {
        f(x);  // Error: Type 'undefined' is not assignable to type 'number'
    }

    let a = x != null ? f(x) : "";  // Type of a is string

    let b = x !== null ? f(x) : "";  // Error: Type 'undefined' is not assignable to type 'number'

    let c = x && f(x);  // Type of c is string | 0 | null | undefined

    let d = x || 3;  // d is number;

}

//The effects on subject variable types accurately reflect JavaScript semantics (e.g. double-equals operators check for both values no matter which one is specified whereas triple-equals only checks for the specified value).