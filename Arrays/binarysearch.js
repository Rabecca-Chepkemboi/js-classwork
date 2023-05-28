//Given ana array of numbers search for the following 
//target and return -one if not found else the index

function binary(arry, target){
    let leftIndex = 0;
    let rightIndex = arry.length -1;
    console.log("left1", leftIndex);
    console.log("right1", rightIndex);

    while(leftIndex <= rightIndex){
        console.log("left2", leftIndex);
        console.log("right2", rightIndex);
        let middle = Math.floor((leftIndex + rightIndex)/2);
        if(arry[middle] === target){
            return middle;
        }
        else if(arry[middle] > target){
            rightIndex = middle -1
        }
        else{leftIndex = middle + 1
            leftIndex = middle +1
        }
    }
    return-1

}
let num = [1, 3, 6, 8, 9, 56, 89];
let target = 9;
console.log(binary(num, target));

//Given an array of unsorted numbers, return the index of
 //the following target if the target exists in the array.
 // If the target is not found, return null
//let num = [45,12,6,89,2,5]
//let target = 6


function binarySearch(array, targets){
    let left = 0;
    let right = array.length -1;
    console.log("left",left);
    console.log("right", right);

    while (left <= right){
        console.log("left1", left);
        console.log("right1", right);
        let mid = Math.floor((left+right)/2);
        if(targets===array[mid]){
            return mid;
        }
        else if(targets < array[mid]){
            right = mid - 1;
        }
    else {left = mid + 1;
    }
    }
    return null;
}
let array = [45, 12, 6, 89, 2];
let targets = 6;
console.log(binarySearch(array, targets));