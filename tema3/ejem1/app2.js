var myMap = new Map();
myMap.set('a', 'alpha');
myMap.set('b', 'beta');
myMap.set('g', 'gamma');

for(let key of myMap.keys()){
	console.log(key,myMap.get(key));
}

//a alpha
//b beta
//g gamma
