var myMap = new Map();
myMap.set('a', 'alpha');
myMap.set('b', 'beta');
myMap.set('g', 'gamma');

for(let [key, value] of myMap){
	console.log(key,value);
}

//a alpha
//b beta
//g gamma
