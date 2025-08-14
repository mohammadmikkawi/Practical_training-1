
const obj1 = {name: "Ali"};


function Person(name) {
    this.name = name;
}
const obj2 = new Person("Omar");


const proto = {greet() { return "Hello"; }};
const obj3 = Object.create(proto);
obj3.name = "Sara";
