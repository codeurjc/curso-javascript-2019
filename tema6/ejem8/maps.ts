{
    let properties = {};
    
    properties['email'] = "name@example.com";
    let email = properties['email']; //Value has any type
}

{
    let properties: any = {};
    
    properties['email'] = "name@example.com";
    let email = properties['email']; //Value has any type
}

{
    let properties: { [k: string]: string } = {};
    
    properties['email'] = "name@example.com";
    let email = properties['email']; //Value has string type
}

{
    let counts: { [k: string]: number } = {};
    
    counts['lunes'] = 35;
    let lunesCount = counts['lunes']; //Value has number type
}