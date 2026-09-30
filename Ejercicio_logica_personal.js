//Hasta aqui llegue sin IA  

const prompt = require ('prompt-sync')();

let a = Number (prompt ("Digita el primer numeros"));
let b = Number (prompt ("Digita el segundo  numeros"));
let c = Number (prompt ("Digita el segundo  numeros"));

const lisNum = [a,b,c]

let max = Math.max (lisNum);
let min = Math.min (lisNum);

let nums = []

if ((a>b) && (b>c)){
    (lisNum)
}
    else if ((b>c) && (c>a)){
        nums = lisNum.slice(0,1,b)
    }
        else if ((c>a) && (a>b)) {
            lisNum.unshift(c);
        }
            else if ((a>c)&&(c>b) || (b>c)&&(c>a) || (c>b)&&(b>a) ){

                lisNum.slice (0,1,max)
                lisNum.slice (2,1,min)

            }

let numRev = lisNum.reverse ()

console.log (lisNum)
console.log (numRev)

