// Activity 01

let num = 0
if(num === 0){
    console.log('Number is Zero')
}else if(num > 0){
    console.log('Number is Positive')
}else{
    console.log('Number is Negative')
}

let age = 2
if(age >= 18){
    console.log('Person is eligible to Vote')
}else{
    console.log('Person is not eligible to vote')
}

// Activity 02

let a = 15
let b = 8
let c = 29

if(a > b){
    if(a > c){
        console.log(`a: ${a} is greatest among all`);
    }else{
        console.log(`c: ${c} is greatest among all`);
    }
}else{
    console.log(`b: ${b} is greatest among all`);
}

// Activity 03
let day = 1

switch (day.toString()) {
    case '1':
        console.log('Day is Monday');
        break;
    case '2':
        console.log('Day is Tuesday');
        break;
    case '3':
        console.log('Day is Wednesday');
        break;
    case '4':
        console.log('Day is Thursday');
        break;
    case '5':
        console.log('Day is Friday');
        break;
    case '6':
        console.log('Day is Saturday');
        break;
    case '7':
        console.log('Day is Sunday');
        break;

    default:
        console.log('Not a valid input');
        break;
}

let score = 90

switch (score) {
    case score <= 100:
        console.log('Grade is A');
        break;
    case score <= 90:
        console.log('Grade is B');
        break;
    case score <= 80:
        console.log('Grade is C');
        break;
    case score <= 70:
        console.log('Grade is D');
        break;
    case score <= 60:
        console.log('Grade is F');
        break;

    default:
        console.log('Invalid Score');
        break;
}

// Activity 04

let new_num = 3

;(new_num % 2 == 0) ? console.log('Number is even') : console.log('Number is odd')

// Activity 05

let year = 700

if((year % 4 == 0 && year % 100 !== 0) || (year % 400 == 0)){
    console.log(`year ${year} is a leep year`);
}else{
    console.log(`year ${year} is not a leep year`);
}

