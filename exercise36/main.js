const colorPicker = document.querySelector("#colorPicker")
const colorPreview =document.querySelector("#colorPreview")
const selectedColor =document.querySelector("#selectedColor")
const btn =document.querySelector("#btn")


colorPicker.addEventListener("change", function(){
    selectedColor.textContent = `selected color: ${colorPicker.value}` 
    const hexColor = colorPicker.value;
    selectedColor.style.color = hexColor;

})


  colorPicker.addEventListener('input', () => {
    const hexColor = colorPicker.value;
    // colorPreview.textContent = `selected color: ${hexColor}`;
    colorPreview.style.backgroundColor = hexColor;
  });

  function remove(){
    selectedColor.remove(selectedColor.remove)
  }