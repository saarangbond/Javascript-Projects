//camel notation: oneTwoThreeFour
//pascal notation: OneTwoThreeFour

//constructor function
function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}
const circle1 = new Circle(1);
console.log(circle1);
circle1.draw();