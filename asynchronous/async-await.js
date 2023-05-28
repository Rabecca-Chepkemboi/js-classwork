function greet(){
    console.log('welcome to our site');
};
greet();
let data =[{}];

let createUser = new Promise((resolve, reject)=>{
    if(data){
        setTimeout(()=>(resolve('user successful created')),5000);
        resolve('Use successfully created');
    }
    else{
        setTimeout(()=>(resolve('user successful created')),5000);

        reject('User already exists');
    }
});

async function createUserAccount(){
    let response = await createUser;
    console.log({response});
}
createUserAccount();