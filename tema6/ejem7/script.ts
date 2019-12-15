function f1() {
    
    let age = 3;
    
    age = undefined;

}

function f2() {
    
    let age : number | undefined = 3;
    
    age = undefined;
    
}

function f2(condition: boolean) {
    let result: number;
    
    if (condition) {
        result = 5;
    }

    // Aviso: Variable 'result' is used before being assigned
    console.log(result);
}

