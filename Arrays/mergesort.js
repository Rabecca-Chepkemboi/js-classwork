function divideArray(arr){
    if(arr.length <= 1){
        return arr;
    };
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle);
    console.log({left});
    console.log({right});
    return sortedArray(divideArray(left),divideArray(right))
}
function sortedArray(left, right){
    let emptyArray = [];
    while(left.length && right.length){
        if(right[0] < left[0]){
            emptyArray.push(right.shift());
        }
        else{
            emptyArray.push(left.shift());
        }
    }
    return[...emptyArray,...left, ...right]
}
let arr = [3, 10, 26, 15, 11, 4];
console.log(divideArray(arr));


//Given an array of unsorted numbers, return the index of 
//the following target if the target exists in the array. 
//If the target is not found, return null
//let num = [45,12,6,89,2,5]
//let target = 6

function merge(num){
    if (num.length <= 1){
    return num;
    }
    let middle = Math.floor(num.length / 2);
    let left = num.slice(0, middle);
    let right = num.slice(middle);
    console.log({left});
    console.log({right});
    return sorted (merge(left), merge(right));
}
function sorted (left, right){
    let emptyArray = []
    while(left.length && right.length){
    if (left[0] < right[0]){
    emptyArray.push(left.shift());
    }
    else{
        emptyArray.push(right.shift());
    }
    }
    return[...emptyArray, ...left, ...right];
}
let num = [45,12,6,89,2,5,7];
console.log(merge(num));
