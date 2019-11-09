function World(name, currency, size) {
    this.name = name;
    this.currency = currency;
    this.size = size;
    this.greeting = function () {
        return console.log('Hello user welcome to ' + this.name + '.');
    };
};

//Need to create a function where user can input their name to be the controller
function God(name) {
    //Name
}
let k = new World("Kamikaze Heaven", "KHG", 2000);
document.getElementById("a1").innerHTML = k.name;

function Person(fn, ln, age, gender, nationality, money) {
    this.firstName = fn;
    this.lastName = ln;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
    this.money = money;
    this.house = [];
}

function House(color, size, price, age) {
    this.color = color;
    this.size = size;
    this.price = price;
    this.age = age;
    this.neighbors = [];
}

function Bank() {
    //Name
    //Owner
    //Size
    //Color
    //Reserve
    //Location
}
// Creating people
let em = new Person("Elon", "Musk", 48, "male", "Canadian", 0);
document.getElementById("p1-name").innerHTML = em.firstName + " " + em.lastName;
document.getElementById("p1-age").innerHTML = em.age;
document.getElementById("p1-gender").innerHTML = em.gender;
document.getElementById("p1-nationality").innerHTML = em.nationality;
document.getElementById("p1-money").innerHTML = em.money;

let mz = new Person("Mark", "Zuckerberg", 35, "male", "American", 0);
document.getElementById("p2").innerHTML = mz;

let jb = new Person("Jeff", "Bezos", 55, "male", "American", 0);
document.getElementById("p3").innerHTML = jb;

let lp = new Person("Larry", "Page", 46, "male", "American", 0);
document.getElementById("p4").innerHTML = lp;

// Creating houses
let h1 = new House("Blue", 1000, 100000, 4);
console.log(h1);
let h2 = new House("Yellow", 1100, 110000, 3);
console.log(h2);
let h3 = new House("Red", 1200, 120000, 2);
console.log(h3);
let h4 = new House("Greeb", 1300, 130000, 1);
console.log(h4);

h1.neighbors = h2;