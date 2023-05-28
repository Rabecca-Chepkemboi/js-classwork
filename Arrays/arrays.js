let items = [2,5,"sweet", false, 45];

// Array methods
items.push(62);
console.log(items);

items.unshift(6.5);
console.log(items);

items[2] = "food";
console.log(items);

items.pop();
console.log(items);

items.shift();
console.log(items);

//Array sorting
let num = [1, 9, 34, 12, 25, 30];
let sorted = num.sort((c, b) => c - b);
console.log(sorted);

//given an array of x elements, return an array with each element in x multiplied by two 
const result = num.map(
    (item)=>{
        return item * 2
    }
)
console.log(result);

// let newArray = [];
// const result2 = num.forEach((item,index)=>{ newArray.push(item*2)});
// console.log(newArray);
// console.log({result2});


let a = [1, 2, 3];
let b = [4, 5, 6];
let join1 = a.concat(b);
console.log({join1});

let c = [1,40,...a, ...b];
console.log({c});

//desructuring
let [z,x, ...e] = c;
console.log({z});
console.log({x});
console.log({e});