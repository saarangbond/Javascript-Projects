let x = 10;
let y = x;
x = 20;
console.log(x, y);

console.log();

let obj1 = {value: 10};
let obj2 = obj1;
obj1.value = 20;
console.log(obj1, obj2);

//primitives are copied by value
//objects are copied by reference
console.log();
console.log();

let number = 10;
function incNum(number){
    number++;
}
incNum(number);
console.log(number);

console.log();

let numObj = {value: 10};
function increase(numObj){
    numObj.value ++;
}
increase(numObj);
console.log(numObj);