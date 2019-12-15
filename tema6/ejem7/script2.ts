let x: number;
let y: number | undefined;
let z: number | null | undefined;

x = 1;  // Ok
y = 1;  // Ok
z = 1;  // Ok

x = undefined;  // Error: Type 'undefined' is not assignable to type 'number'
y = undefined;  // Ok
z = undefined;  // Ok

x = null;  // Error: Type 'undefined' is not assignable to type 'number'
y = null;  // Error
z = null;  // Ok

x = y;  // Error: Type 'undefined' is not assignable to type 'number'.
x = z;  // Error: Type 'null' is not assignable to type 'number' 
y = x;  // Ok

y = z;  // Error: Type 'null' is not assignable to type 'number | undefined'
z = x;  // Ok
z = y;  // Ok