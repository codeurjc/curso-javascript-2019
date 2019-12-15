function foo(x: boolean): number {

    if (x) {
        return 10;
    } else {
        throw new Error();
    }
    return 1;
}

function f(x: any) {
    if (x) {
        return true;
    }
    else {
        return false;
    }

    x = 0; // Error: Unreachable code detected.
}

function f2() {
    return            // Automatic Semicolon Insertion triggered at newline
    {
        x: "string"   // Error: Unreachable code detected.
    }
}

function f3() {
    return {
        x: "string"
    }
}

function f4(x: any) {
    switch (x % 2) {
        case 0: // Error: Fallthrough case in switch.
            console.log("even");

        case 1:
            console.log("odd");
            break;
    }
}