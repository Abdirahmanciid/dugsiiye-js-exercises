function operate(a,b, callback){
    return callback(a,b);
}

function division(a,b){
    return a/b;
}
function multiply(a,b){
    return a*b
}
console.log(operate(3,4, multiply))
console.log(operate(80,2, division))