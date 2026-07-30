function fetchUserData(){
    return new Promise((resolve, reject)=>{
         setTimeout(()=>{
        const success = true;
        if (success){
            resolve({id: 344, name:"deeq mouse"});
        }else{
            reject("failed to fetch user data");
        }
    },2000)
        
    })
   
}

fetchUserData()
.then((data)=> console.log("user data", data))
.catch((error)=>console.log(error))