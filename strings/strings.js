let trial = "Hello";
trial = 'Hello';
trial = `Hello`;

let a = "Hey";
let b = "There";

let c = a + " " +b;
console.log(c);
let d = `${a} ${b} Human`;
console.log(d);

console.log(a[1]);
a[0] = "h";
console.log("a",a);

let chat = "mama, baba, kaka, dada, mjomba, shangazi, nyaya, amu, babu";
console.log(chat.length);
console.log(chat.substring(10,20));
console.log(chat.replace(/kaka/g,"chep"))

let det = ("there, this, that")
let det1 = chat.concat(',',det)
console.log(det1)
console.log(chat[12])
console.log(chat.split(","))
console.log(chat.indexOf("mjomba"))
console.log(chat.lastIndexOf("mjomba"))
console.log(chat.match("mba"))
