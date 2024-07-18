// Activity 01

let arr = [1, 2, 3, 4, 5]
console.log(arr);

let arrFirst = arr[0]
let arrLast = arr[arr.length-1]

console.log(`First Element of array is ${arrFirst} and Last Element of array if ${arrLast}`);

// Activity 02

arr.push(6)
console.log(arr);
arr.pop()
console.log(arr);
arr.shift()
console.log(arr);
arr.unshift(0)
console.log(arr);

// Activity 03

let new_arr = arr.map(ele => ele*2)
console.log(`New Array : ${new_arr}`);

let even_arr = arr.filter(ele => ele%2 === 0)
console.log(`Even Array : ${even_arr}`);

let arr_sum = arr.reduce((prev, curr) => prev += curr)
console.log(`Sum of Array : ${arr_sum}`);

// Activity 04

for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}

arr.forEach(ele => console.log(ele))

// Activity 05

let matrix = [[1, 2, 3, 4, 5], [1, 2, 3, 4, 5], [1, 2,3, 4, 5]]

for(let i = 0; i < matrix.length; i++){
    console.log(matrix[i]);
}

let element = matrix[2][3]
console.log(element);