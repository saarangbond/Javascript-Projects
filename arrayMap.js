const numbers = [1, -1, 2, 3];
console.log(numbers);

//arrow function: =>
// ^ means 'where'

//filter and map methods return a new array
//these methods are chainable

const items = numbers
.filter(value => value >= 0)
.map(value => ({value}))
.filter(obj => obj.value > 1);

console.log(items);