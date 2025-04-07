function evennums(arr){
    return arr.filter(num => num%2==0)
}

st=[1,2,3,4,5,6,11,22,33,44,54,56,65];
console.log(evennums(st));