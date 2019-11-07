var x, y, z;
x = 1;
y = 2;
z = x + y;

console.log(z);
console.log("----------");

var a = "Robert"
var b = "Hartley"

console.log(a + " " + b);
console.log("----------");

var c, d, e;
c = 10;
d = 20;
e = c * d;

console.log(e);
console.log("----------");
// This is how to comment :)

/* 
WOAH
WOAH
WOAH
*/

var priceOne = 10;
var priceTwo = 20;
var totalPrice = priceOne + priceTwo;
console.log(totalPrice)
console.log("----------");

var carBrand;
carName = "Tesla";
var carModel;
carModel = "Model Y";
console.log(carName + " " + carModel);
console.log("----------");

typeof "Robert";

function firstFunction(p1,p2) {
    return p1 * p2;
}
var x = firstFunction(4, 3)
console.log(x);
console.log("----------");

var car = {type:"Tesla", model:"Y", color:"Black"};
console.log(car);
console.log("----------");

var person = {
    firstName: "Robert",
    lastName: "Hartley",
    age: 22,
    eyeColor: "Hazel",
    fullName : function() {
        return this.firstName + " " + this.lastName;
      }
  };
name = person.fullName();
console.log(name);
console.log("----------");




