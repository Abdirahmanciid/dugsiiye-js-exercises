let numbers=[1,2,3]
let sumNum=[...numbers, 4,5,6]
console.log(sumNum)

console.log("----------")
console.log("rest operators ")

function multiply(...numbers){
     return numbers.reduce((total,num)=> total * num, 1)
}
console.log(multiply(2,3,10))