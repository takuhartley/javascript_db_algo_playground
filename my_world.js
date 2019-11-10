/*
This is a sandbox world created by me,
where I can test out random code, tips & tricks,
to hone my skills to become a better programmer
*/

//Need to create a function where user can input their name to be the controller
function God(devineName) {
    this.godname = devineName;
};

//Create object method
function World(name, currency, size) {
    this.name = name;
    this.currency = currency;
    this.size = size;
    this.greeting = function () {
        return console.log('Hello user welcome to ' + this.name + '.');
    };
};

//Create person object
function Person(fn, ln, age, gender, nationality, money) {
    this.firstName = fn;
    this.lastName = ln;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
    this.money = money;
    this.house = [];
}

//Create house object
function House(color, size, price, age) {
    this.color = color;
    this.size = size;
    this.price = price;
    this.age = age;
    this.neighbors = [];
}

//Create bank object
function Bank(name, size, color, reserve) {
    this.name = name;
    this.size = size;
    this.color = color;
    this.reserve = reserve;
    this.neighbors = [];//Neighbor should be recorded as list which is updated through function of appending.
    this.owner = Person()//Bank has owner which can be set as well
}

function Test1(property1) {
    this.prop1 = property1;
}
function Test2() {
    this.inherit = Test1();
}
let a = new Test1(10);
console.log(a);
let b = Test2();
console.log(b);
//Creating variables
var gn;

//Create a World object
let k = new World("Kamikaze Heaven", "KHG", 2000);

//Creating people
let em = new Person("Elon", "Musk", 48, "male", "Canadian", 0);
let jb = new Person("Jeff", "Bezos", 55, "male", "American", 0);
let mz = new Person("Mark", "Zuckerberg", 35, "male", "American", 0);
let lp = new Person("Larry", "Page", 46, "male", "American", 0);

// Creating houses
let h1 = new House("Blue", 1000, 100000, 4);
let h2 = new House("Yellow", 1100, 110000, 3);
let h3 = new House("Red", 1200, 120000, 2);
let h4 = new House("Greeb", 1300, 130000, 1);

//Creating Bank
let KamikazeBank = new Bank("Kamikaze Federal Bank", 2000, "Yellow", 100000000);

//Bank owner
KamikazeBank.owner = jb;
//console.log("I " + KamikazeBank.owner.Person.name + "am the owner of " + KamikazeBank.name);
//Function that takes onclick event
function addName() {
    gn = document.getElementById("userInput").value;
    console.log(gn);
    //Return gn to print it out to DOM
    return gn;
}

//Printing to DOM
document.getElementById("gn1").innerHTML = "Welcome to " + k.name + " " + gn + "!";
document.getElementById("a1").innerHTML = k.name;
document.getElementById("p1-name").innerHTML = em.firstName + " " + em.lastName;
document.getElementById("p1-age").innerHTML = em.age;
document.getElementById("p1-gender").innerHTML = em.gender;
document.getElementById("p1-nationality").innerHTML = em.nationality;
document.getElementById("p1-money").innerHTML = em.money;
document.getElementById("p2").innerHTML = mz;
document.getElementById("p3").innerHTML = jb;
document.getElementById("p4").innerHTML = lp;