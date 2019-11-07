var world = {
    name: "Kaminari Heaven",
    currency: "khc",
    size: 2000000,
};
console.log(world);
console.log("Hello welcome to " + world.name + ".");

function Person(fn, ln, age, gender, nationality, money) {
    this.firstName = fn;
    this.lastName = ln;
    this.age = age;
    this.gender = gender;
    this.nationality = nationality;
    this.money = money;
}

var em = new Person("Elon", "Musk", 48, "male", "Canadian", 0);
console.log(em);
var mz = new Person("Mark", "Zuckerberg", 35, "male", "American", 0);
console.log(mz);
var jb = new Person("Jeff", "Bezos", 55, "male", "American", 0);
console.log(jb);
var lp = new Person("Larry", "Page", 46, "male", "American", 0);
console.log(lp);