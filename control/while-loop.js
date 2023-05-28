let num = [10, 20, 3, 8, 7, 9, 12];
let i = 0;
let sum = 0;

while(i < num.length){
    console.log(i);
    sum+=num[i];
    i++;
}
console.log({sum});


// let number = [3, 6, 7, 1, 10, 22, 4, 8];
// let x = 0;
// while (i = 4) {
//     number += x;
//     x ++
// }
// console.log({x});


function fourthIndex(arr) {
    let i = 0;
    while (i < arr.length) {
      if (i === 4) {
        break; 
      }
      console.log(arr[i]);
      i++;
    }
  }
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  console.log(fourthIndex(arr));


  
  
