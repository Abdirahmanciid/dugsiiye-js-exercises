const list = document.querySelector("#list");

function addList(){
    const newList = document.createElement ("li")
    newList.textContent = "new list"
    list.appendChild(newList)
}


function addItem (){
const newItem =document.createElement("li");
    newItem.textContent="new Item";
    list.appendChild(newItem)
   
}

function removeList(){
    if (list.lastChild){
        list.removeChild(list.lastChild);
    }else {
    alert("wa ladhameeyey shaqadan")
    }
}