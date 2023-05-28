let num = [3, 6, 8, 25, 7, 5, 7];

console.log(num.length);

let multiples = num.map(item => item * 2);
console.log({multiples});

// let triples = num.forEach(item => {
//     console.log (item * 2)});
// console.log({triples});

let triples = [];
num.forEach(item => {
    triples.push(item * 2)
});
console.log({triples});

let less = num.filter(item => item < 10);
console.log({less});

let getSeven = num.find(item => item === 7);
console.log({getSeven});


function divisible_three(numbers) {
    let nums = num.filter(num => num % 3 === 0);
    console.log(nums);
}
let numbers = [3, 5, 9, 4, 6, 2, 1];
console.log(divisible_three({numbers}));






