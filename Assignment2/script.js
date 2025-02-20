
// 1.

var age = 25;
var isAdult = true;
if (age < 18) {
    var isAdult = false;
}
console.log(isAdult);

//2.

let x = 10;
let y = 5;

let add = x + y;
let multiplication = x * y;
let modulus = x % y;

console.log(add);
console.log(multiplication);
console.log(modulus);

//3.

let n = 5;
let isEven = false;
if (n % 2 == 0) {
    isEven = true;
}
console.log(isEven);

//4.

let arr = new Array(5);
for (let i = 0; i < arr.length; i++) {
    arr[i] = i+1;
}
console.log(arr);

//5.

function square(n) {
    return n * n;
}
console.log(square(5));

