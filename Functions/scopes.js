let a = 20;            //global variable accessed everywhere
function add (b){
    console.log(a+b);
    let c = 30;            //local variable accessed in the scope defined
    console.log(a+b+c);
}
add(20);
console.log({a}); 


function great(){
    let hello = "hey";
    function talk(){
        let greeting = "hello there";
        console.log(`${hello} ${greeting}`);
    }
    talk()
}
great()