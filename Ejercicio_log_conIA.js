const prompt = require('prompt-sync')();

let a = Number(prompt("Digita el primer numero: "));
let b = Number(prompt("Digita el segundo numero: "));
let c = Number(prompt("Digita el tercer numero: "));

const lisNum = [a, b, c];

let max = Math.max(...lisNum);
let min = Math.min(...lisNum);

let nums = [];

if ((a >= b) && (b >= c)) {
    nums = [a, b, c];
}
else if ((a >= c) && (c >= b)) {
    nums = [a, c, b];
}
else if ((b >= a) && (a >= c)) {
    nums = [b, a, c];
}
else if ((b >= c) && (c >= a)) {
    nums = [b, c, a];
}
else if ((c >= a) && (a >= b)) {
    nums = [c, a, b];
}
else if ((c >= b) && (b >= a)) {
    nums = [c, b, a];
}

let numRev = [...nums].reverse();

console.log(nums);
console.log(numRev);