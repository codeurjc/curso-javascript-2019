var myMap = new Map();
myMap.set('a', { name: 'alpha'});
myMap.set('b', { name: 'beta'});
myMap.set('g', { name: 'gamma'});

console.log(myMap);

var myMap2 = new Map();
myMap2.set('a', new Date(1995,11,17));
myMap2.set('b', new Date(1920,11,17));
myMap2.set('g', new Date(2020,10,20));

console.log(myMap2);
