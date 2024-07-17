// Activity 01

function evenOdd(num){
    if(num % 2 == 0) console.log('Number is Even')
    else console.log('Number is Odd')
}
evenOdd(2)

function square(num){
    return num**2
}

console.log(square(5));

// Activity 02

const maxNum = function(num1, num2){
    return Math.max(num1, num2)
}

console.log(maxNum(6, 6));

const addStr = function(str1, str2){
    return str1+str2
}

console.log(addStr('Hello', 'JS'));

// Activity 03

const numSum = (num1, num2) => num1+num2

console.log(numSum(2, 3));

const charInStr = (str, char) => str.includes(char)

console.log(charInStr('Hello this is me !', 'l'));

// Activity 04

function numProduct(num1, num2 = 4){
    return num1 * num2
}

console.log(numProduct(5, 6));
console.log(numProduct(5));

function greet(name, age){
    return `Hello ${name}, ${age} welcome to my code base`
}

console.log(greet('Kushagra', 20));

// Activity 05

function callNTimes(fn, num){
    for(let i = 0; i < num; i++){
        fn()
    }
}

function calculation(fn1, fn2, val){
    return fn2(fn1(val))
}