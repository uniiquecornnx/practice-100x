function eighteenplus(arr){
    return arr.filter(num=>num.age>=18);
}

st=[{name:"devisha", age:12},{name:"aditi",age:21},{name:"lmaoo",age:43}]
console.log(eighteenplus(st));