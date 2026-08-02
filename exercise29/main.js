async function fetchData(){
    console.log("fetching data");
    const respone = await fetch("./data.json")
    const data = await respone.json();
    console.log("respone", data)

}
fetchData();