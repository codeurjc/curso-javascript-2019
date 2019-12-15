{
    let x: number;
    let y: number | null;
    let z: number | undefined;
 
    x;  // Error: Variable 'x' is used before being assigned
    y;  // Error: Variable 'y' is used before being assigned
    z;  // Ok
 
    x = 1;
    y = null;
 
    x;  // Ok
    y;  // Ok
}
