// Activity 01

for(let i = 1; i <= 10; i++){
    console.log(i);
}

for(let i = 1; i <= 10; i++){
    console.log(i*5);
}

// Activity 02

let sum = 0
let i = 0

while(i <= 10){
    sum+=i
    i++
}

console.log(sum);

let j = 10

while(j >= 1){
    console.log(j);
    j--
}

// Activity 03

let k = 1
do{
    console.log(k);
    k++
}while(k <= 5)


let fact = 1

let num = 5

do{
    fact*=num
    num--
}while(num >= 1)

console.log(fact);

// Activity 04

for(let i = 0; i < 5; i++){
    for(let j = 0; j <= i ; j++){
        process.stdout.write('*')
    }
    console.log();
}

// Activity 05

for(let i = 0; i < 10; i++){
    if(i == 5) continue
    console.log(i);
}

for(let i = 0; i < 10; i++){
    if(i == 7) break
    console.log(i);
}