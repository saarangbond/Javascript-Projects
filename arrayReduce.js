const numbers = [1, -1, 2, 3];

/*
let sum = 0;
for(n of numbers){
    sum += n;
}
console.log(sum);
*/

const sum = numbers.reduce((sum, value) => {
    return sum + value;
}, 0);

console.log(sum);