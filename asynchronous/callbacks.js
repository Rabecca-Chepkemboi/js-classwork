function talk (statement, callback){
    console.log(statement);
    callback();
};
function greet(){
    console.log('Hello there');
}
talk('I love the coronation', greet)

