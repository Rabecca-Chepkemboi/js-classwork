let a = 30;
console.log(a);

//arithmetic operators

const num = 10;
const num2 = 30;
//addition +
console.log(num + num2);
console.log(num - num2);
console.log(num / num2);
console.log(num * num2);
console.log(num % num2);

let age = 39;

age++;

console.log({age});
age --;
console.log("age",age);

age += 5;
console.log("new Age",age);

let powerNum = num ** num2;
console.log(powerNum);

let b = 10;
let c = "10";
let comparison = b == c;
let notEqual = b != c;
console.log("comparison",comparison);
console.log("notEqual",notEqual);

let strictyly = b === c;
console.log("strictly",strictyly);

let strictlyNot = b !== c;
console.log({strictlyNot});

//logical operators

const age1 = 25;
const age2 = 38;

if(age1 > age2 && num > num2){
    console.log(true)
}
else{
    console.log(false)
}
