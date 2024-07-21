// Activity 01
let name = 'Kushagra'
let age = 22
let str = `Name is : ${name}, and age is : ${age}`
console.log(str);

let multiLineString = `This is a 
multiline
String made using 
template literal`
console.log(multiLineString);

// Activity 02
let arr = [1, 2, 3, 4, 5, 6];

[first, second] = [...arr]

console.log(`${first}, ${second}`);

let book = {
    title: 'Book 1',
    author: 'Author 1',
    year: 'Year 1',
    callMe: function(){
        return `Title ${this.title} and Author ${this.author}`
    }
}

const {title, author} = book
console.log(`title is: ${title}, author is: ${author}`);

// Activity 03

let myArr = [1, 2, 3, ...arr]
console.log(myArr);

function myFunc(...args){
    let sum = 0
    for(let i = 0; i < args.length; i++){
        sum += args[i]
    }
    return sum
}

console.log(myFunc(1, 2, 3, 4, 5));

// Activity 04

function product(num1, num2 = 1){
    return num1*num2
}

console.log(product(3, 4));
console.log(product(3));

// Activity 05

const myName = 'kaku'
const myAge = 22
const prop = 'Occupation'

const person = {
    name,
    age,
    [prop]: 'Engineer',
    sayHi(){
        console.log(`My name is ${name} and my age is ${age}`);
    }
}

console.log(person);
person.sayHi()

const prop1 = 'name'
const prop2 = 'age'

const newPerson = {
    [prop1] :'kaku',
    [prop2] :22,
    sayHi(){
        console.log(`My name is ${this[prop1]} and my age is ${this[prop2]}`);
    }
}

console.log(newPerson);
newPerson.sayHi()