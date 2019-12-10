const chart = {};
const { coords = { x: 0, y: 0 } } = chart;
console.log(coords); // {x:0, y:0}

const chart2 = { coords2: { x: 3 } };
const { coords2 = { x: 0, y: 0 } } = chart2;
console.log(coords2); // { x: 3 }

const chart3 = { coords3: { x: 3 } };
const { coords3: { x = 0, y = 0 } } = chart3;
console.log(x,y); // 3 0