let student = {
    name: "Stephen",
    age: 19,
    greet: function(){
        console.log("Hello");
        console.log(`hello my name is ${student.name} and I am ${student.age} years old`);
        console.log(`hello my name is ${this.name} and I am ${this.age} years old`);
    }
};
student.greet();
student.talk = function(){
    console.log('Hello there');
};
student.talk();