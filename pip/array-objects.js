let people = [
    {name:"clarah", age:27, height: 3},
    {name:"issah", age:25, height: 4},
    {name:"omosh", age:23, height: 9},

];

let ages = people.map(item => item.age);
console.log({ages});

let weight = people.map(item =>{
    return{
        ...item,
        weight:50,
    }
})
console.log({weight});


let changeWeight = weight.map(item =>{
    if(item.name == "clarah" || "issah"){
        item.weight = 60;
    }
    return item
});
console.log({changeWeight});