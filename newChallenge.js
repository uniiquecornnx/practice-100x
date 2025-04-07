function adult(arr){
    return arr.filter(num=>num.age>=18 && num.gender==="male")
    .map(person=>person.name);
};

st=[{name:"ram", age: 45, gender:"male"},{name:"green",age:12,gender:"female"}];
console.log(adult(st));