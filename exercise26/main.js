function fuli(){
    alert("Taabo ok si aad u gudubto")
   return{id:44, name:"salah"}
}
 const user = fuli();
//  console.log("user data", user);
// console.log("This message is blocked until user data is fetched");


function userData(callback){
setTimeout(()=>{
  const xog ={id:99, name:"salman", age:22}
  callback(xog)
}, 2000)
};
// console.log("soo saar xogta ")

userData(function(xog){
    console.log(xog);
});

console.log("xogtan danbe waa in ay so hormarta")


