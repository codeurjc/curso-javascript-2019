function f1({param1 = 'v1', param2 = 'v2'} = {}){
    
    console.log(param1);
    console.log(param2);
}

f1({param1: 3});
console.log('--');

f1({param2: 5});
console.log('--');

f1({param1: 1, param2: 2});
console.log('--');

let config = {param1: 1, param2: 2}

if(true){
    config.param3 = 3;
}

f1(config);
console.log('--');