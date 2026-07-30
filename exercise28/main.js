function fetchUserData(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const success = true;
            if(success){
                resolve({id: 33, name: "salma hassan"})
            }else{
                reject("failed to fectch use data")
            }
        },2000);
    })
}

async function displayUserData(){
    try{
        const user= await fetchUserData();
        console.log(user)
    }catch{
         console.log(error)
    }
}
displayUserData();