function greet(user){
    if(user.gender=="female" && user.age>=18){
        console.log(`hello miss ${user.name} of age ${user.age}, eligible to vote`)
    }
    else if(user.gender=="female" && user.age<18){
        console.log(`hello miss ${user.name} of age ${user.age} not eligible`)
    }
    else if(user.gender=="male" && user.age<18){
        console.log(`hello mr ${user.name} of age ${user.age} not eligible`)}
    else if(user.gender=="male" && user.age>=18){
        console.log(`hello mr ${user.name} of age ${user.age}, eligible to vote`)
    };
        

};

let user ={
    name:"devisha",
    age:16,
    gender: "male"
};

//console.log("Running the script...");


greet(user);