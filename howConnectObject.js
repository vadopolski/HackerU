// 0 idea of linking

let americanMan = {
    name : 'John',
    getName : function getName() {
        return this.name;
    }
};

let americanMan2 = americanMan;
console.log(americanMan2.getName());
console.log(americanMan.getName());
americanMan = null;
console.log(americanMan2.getName());



//1 function and prototype and Object.prototype
function Person(fName, lName) {
    this.fName = fName;
    this.lName = lName;
}

Person.prototype.getName = function () {
    return this.fName + ' ' + this.lName;
};

function User(fName, lName, age) {
    Person.call(this, fName, lName);
    this.age = age;
}

User.prototype = Object.create(Person.prototype);
User.prototype.getAge = function () {
    return this.age;
};

const user = new User('Vadim', 'Opolski', 35);
console.log(user.getName() + ' ' + user.getAge());

//2
const animal = {animalType: 'animal', describe() {}};
const mouse = Object.assign(Object.create(animal), {
        animalType: 'mouse',
        size: '4',
        color: 'brown',
        legs: 4
    });


// 3 call
const getName = function () {
    return this.name;
};

obj = { name : "Vadim",
        getName: getName};

console.log(obj.getName.call(obj));

// 4
let girl = {
    name : 'Marina',
    lastName : 'Opolski'
};

let student = {
    profession : 'Math'
};

// student.__proto__ = girl;
// console.log(student.name + student.lastName);

// 5
// Object.setPrototypeOf(student, girl);
// console.log(student.name + ' ' +  student.lastName);

// 6
let student2 =  Object.create(girl);
console.log(student2.name);

// 7
//class
